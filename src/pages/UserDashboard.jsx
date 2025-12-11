import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
    fetchUsers, createUser, updateUser, setUserActive, setUserPassword,
    fetchNotifications, createNotification, updateNotification, setNotificationActive
} from "../services/adminApi";
import { useNavigate } from "react-router-dom";
import UserModel from "../models/userModel";

export default function UserDashboard() {
    const { user, token, logoutUser } = useContext(AuthContext);
    const [tab, setTab] = useState("notes");
    const [users, setUsers] = useState([]);
    const [notes, setNotes] = useState([]);
    const [toast, setToast] = useState(null);
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [created_user, setUsername] = useState("");
    const [created_pass, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token || user?.role !== "user") {
            navigate("/login");
            return;
        }
        loadUsers();
        loadNotes();
    }, [token, user, navigate]);


    function showToast(message, type) {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    }

    async function loadUsers() {
        const data = await fetchUsers(token);
        setUsers(Array.isArray(data) ? data : []);
    }
    async function loadNotes() {
        const data = await fetchNotifications(token);
        setNotes(Array.isArray(data) ? data : []);
    }

    // ---- Notification handlers
    async function onCreateNote(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const payload = {
            title: form.get("title"),
            body: form.get("body"),
            is_active: form.get("is_active") === "on" ? 1 : 0,
        };
        const res = await createNotification(token, payload);
        if (res?.id) { showToast("Notification created", res?.success); e.currentTarget.reset(); loadNotes(); }
        else showToast(res?.message || "Failed to create notification", res?.success);
    }

    async function onUpdateNote(n) {
        const res = await updateNotification(token, n.id, { title: n.title, body: n.body, is_active: n.is_active });
        if (res?.updated) { showToast("Notification updated", res?.success); loadNotes(); }
        else showToast("Failed to update", res?.success);
    }

    async function onToggleNoteActive(n) {
        const res = await setNotificationActive(token, n.id, n.is_active ? 0 : 1);
        if (res?.updated) { showToast(n.is_active ? "Notification deactivated" : "Notification activated"); loadNotes(); }
        else showToast("Failed to toggle", res?.success);
    }

    if (!token || user?.role !== "user") return null;

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-6 right-6 z-50 px-4 py-2 rounded text-white shadow
          ${toast.type === true ? "bg-green-600" : "bg-red-600"}`}>
                    {toast.message}
                </div>
            )}

            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">User Dashboard</h1>
                        <div className="text-sm text-gray-500">Signed in as {user?.fullname}</div>
                    </div>
                    {/* <button
                        onClick={() => { logoutUser(); navigate("/"); }}
                        className="px-3 py-2 rounded bg-red-500 text-white"
                    >
                        Logout
                    </button> */}
                </div>

                {/* Tabs "bg-orange-600 text-white"*/}
                <div className="mb-6 flex gap-2">
                    <button className={`px-3 py-2 rounded ${tab === "notes" ? "btn-primary bg-cgb-500 hover:bg-cgb-700 text-white text-center font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-600 disabled:opacity-60" : "bg-gray-100"}`} onClick={() => setTab("notes")}>Notifications</button>
                    <button className={`px-3 py-2 rounded ${tab === "security" ? "btn-primary bg-cgb-500 hover:bg-cgb-700 text-white text-center font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-600 disabled:opacity-60" : "bg-gray-100"}`} onClick={() => setTab("security")}>Security</button>
                </div>

                {/* NOTIFICATIONS TAB */}
                {tab === "notes" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <form onSubmit={onCreateNote} className="border rounded p-4">
                            <h3 className="font-semibold mb-3">Create Notification</h3>
                            <div className="grid gap-3">
                                <input name="title" placeholder="Title" className="border p-2 rounded" required />
                                <textarea name="body" placeholder="Body" className="border p-2 rounded h-28" required />
                                <label className="inline-flex items-center gap-2 text-sm">
                                    <input type="checkbox" name="is_active" defaultChecked /> Active
                                </label>
                                <button className="btn-primary bg-cgb-500 hover:bg-cgb-700 text-white text-center font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-600 disabled:opacity-60">Create</button>
                            </div>
                        </form>

                        <div className="border rounded p-4">
                            <h3 className="font-semibold mb-3">Notifications</h3>
                            <div className="space-y-3 max-h-[520px] overflow-auto">
                                {notes.map(n => (
                                    <NoteRow
                                        key={n.id}
                                        note={n}
                                        onUpdate={onUpdateNote}
                                        onToggleActive={onToggleNoteActive}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* SECURITY TAB (self change password) */}
                {tab === "security" && (
                    <SelfPasswordSection token={token} showToast={showToast} />
                )}
            </div>
        </div>
    );
}

function UserRow({ user, onUpdate, onToggleActive, onChangePassword }) {
    const [u, setU] = useState({ ...user });
    return (
        <div className="border rounded p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <div className="font-semibold">{u.username} <span className="text-xs text-gray-500">#{u.id}</span></div>
                <span className={`text-xs px-2 py-1 rounded ${u.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                    {u.is_active ? "Active" : "Inactive"}
                </span>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
                <input value={u.email || ""} onChange={e => setU({ ...u, email: e.target.value })} className="border p-2 rounded" placeholder="Email" />
                <input value={u.mobile || ""} onChange={e => setU({ ...u, mobile: e.target.value })} className="border p-2 rounded" placeholder="Mobile" />
                <select value={u.role} onChange={e => setU({ ...u, role: e.target.value })} className="border p-2 rounded">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="flex gap-2">
                <button onClick={() => onUpdate(u)} className="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
                <button onClick={() => onToggleActive(u)} className={`px-3 py-2 rounded ${u.is_active ? "bg-red-500 text-white" : "bg-green-600 text-white"}`}>
                    {u.is_active ? "Deactivate" : "Activate"}
                </button>
                <button onClick={() => onChangePassword(u)} className="px-3 py-2 bg-purple-600 text-white rounded">Set Password</button>
            </div>
        </div>
    );
}

function NoteRow({ note, onUpdate, onToggleActive }) {
    const [n, setN] = useState({ ...note });
    return (
        <div className="border rounded p-3 flex flex-col gap-2">
            <input value={n.title} onChange={e => setN({ ...n, title: e.target.value })} className="border p-2 rounded" />
            <textarea value={n.body} onChange={e => setN({ ...n, body: e.target.value })} className="border p-2 rounded h-24" />
            <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={!!n.is_active} onChange={e => setN({ ...n, is_active: e.target.checked ? 1 : 0 })} />
                    Active
                </label>
                <div className="flex gap-2">
                    <button onClick={() => onUpdate(n)} className="px-3 py-2 bg-blue-600 text-white rounded">Save</button>
                    <button onClick={() => onToggleActive(n)} className={`${n.is_active ? "bg-red-500" : "bg-green-600"} px-3 py-2 text-white rounded`}>
                        {n.is_active ? "Deactivate" : "Activate"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SelfPasswordSection({ token, showToast }) {
    const [oldPwd, setOldPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");

    async function submit(e) {
        e.preventDefault();
        const res = await fetch(((import.meta.env?.VITE_API_URL) || "http://localhost:4000") + "/api/account/password", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ old_password: oldPwd, new_password: newPwd })
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data?.updated) {
            showToast("Password changed");
            setOldPwd(""); setNewPwd("");
        } else {
            showToast(data?.message || "Failed to change password", "error");
        }
    }

    return (
        <form onSubmit={submit} className="max-w-md border rounded p-4">
            <h3 className="font-semibold mb-3">Change My Password</h3>
            <input value={oldPwd} onChange={e => setOldPwd(e.target.value)} type="password" placeholder="Old password" className="border p-2 rounded w-full mb-2" />
            <input value={newPwd} onChange={e => setNewPwd(e.target.value)} type="password" placeholder="New password" className="border p-2 rounded w-full mb-3" />
            <button className="btn-primary bg-cgb-500 hover:bg-cgb-700 text-white text-center font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] focus:ring-4 focus:ring-cgb-600 disabled:opacity-60">Change Password</button>
        </form>
    );
}
