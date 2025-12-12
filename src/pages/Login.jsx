import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login as apiLogin } from "../services/api";
import building from "../assets/cgpsc_new_building.png";
import logo from '../assets/logo_cgpsc.png'
import { Navigate, useNavigate } from "react-router-dom";

//import UserModel from "../models/loginModel";
/**
 * Beautiful Login Page for CGPSC React + Tailwind
 * Works standalone or can connect to your API login endpoint.
 */

export default function Login() {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [inputType, setInputType] = useState(""); // email | mobile | username
    const [error, setError] = useState("");
    const [toast, setToast] = useState({ show: false, message: "", type: "" });


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 10000); // 10 seconds
            return () => clearTimeout(timer);
        }
    }, [message]);

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleInputChange = (value) => {
        setUsername(value);

        if (!value) {
            setInputType("");
            setError("");
            return;
        }

        if (/^[0-9]{10}$/.test(value)) {
            setInputType("mobile");
            setError("");
        }
        else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setInputType("email");
            setError("");
        }
        else if (/^[a-zA-Z0-9_]{8,20}$/.test(value)) {
            setInputType("username");
            setError("");
        }
        else {
            setInputType("invalid");
            setError("Invalid input format");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const data = await apiLogin(inputType, username, password);
            // console.log("LOGIN RESPONSE:", data);

            if (data?.success) {
                setLoading(false);

                loginUser(
                    data.token,
                    { fullname: data.fullname, role: data.role });
                setToast({
                    show: true,
                    message: `Welcome back, ${data.role}! Redirecting...`,
                    type: data?.success,
                });

                if (data.role === "admin" || data.role === "superadmin") {
                    navigate("/admin");
                } else {
                    navigate("/user");
                }
            } else {
                setLoading(false);
                setToast({
                    show: true,
                    message: data?.message || "Login failed",
                    type: data?.success,
                });
            }

        } catch (err) {
            setLoading(false);
            console.log(err);
            setToast({
                show: true,
                message: "Server error, please try again later",
                type: "error",
            });
        }
    };


    return (

        <div className="min-h flex items-center justify-center bg-gradient-to-br from-cbg-50 via-white to-cbg-100 px-4">
            {/* 🧁 Toast Notification */}
            {toast.show && (
                <div className="fixed top-6 right-6 z-50 animate-slide-in">
                    <div
                        className={`px-5 py-3 rounded-lg shadow-lg flex items-center space-x-3 text-white transition-all duration-500 ${toast.type === true ? "bg-green-600" : "bg-red-600"
                            }`}
                    >
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}
            <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left side (Image + Text) */}
                <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-cgb-600 to-cgb-400 relative text-white">
                    <img
                        src={building}
                        alt="CGPSC Building"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="CGPSC logo" className="w-14 h-14 bg-white rounded-3xl shadow-2xl opacity-80 " />
                    </div>
                    <div className="relative z-10 text-center p-10">
                        <h2 className="text-3xl text-cgb-900 font-bold mb-2">छत्तीसगढ़ लोक सेवा आयोग</h2>
                        <p className="text-lg text-gray-700">
                            Welcome to the official CGPSC portal.
                            Please log in to continue to your dashboard.
                        </p>
                    </div>
                </div>

                {/* Right side (Form) */}
                <div className="p-10 flex flex-col justify-center relative">
                    <h1 className="text-3xl font-bold text-cgb-700 mb-6 text-center">
                        Admin / User Login
                    </h1>

                    <form onSubmit={handleLogin} className="space-y-5 max-w-sm mx-auto">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Username/Mobile/Email
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => handleInputChange(e.target.value)}
                                placeholder="Username/Mobile/Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cgb-400 outline-none transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cgb-400 outline-none transition"
                            />
                        </div>
                        {/* <div>{inputType && inputType !== "invalid" && (
                            <p className="text-sm text-green-600">Detected: {inputType}</p>
                        )}

                            {error && <p className="text-sm text-red-600">{error}</p>}
                        </div> */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cgb-500 hover:bg-cgb-700 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-300 disabled:opacity-60"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    {/* <p className="text-center text-gray-400 text-xs mt-6">
                        For demo: <b>admin / admin123</b>
                    </p> */}

                    <div className="absolute bottom-4 right-6 text-xs text-gray-400">
                        © 2025 CGPSC Portal
                    </div>
                </div>
            </div>
        </div>
    );
}
