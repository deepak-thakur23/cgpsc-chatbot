import React, { createContext, useState, useEffect, useContext } from "react";
import Spinner from "../components/Spinner";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // { fullname, role, username, section, userId, ... }
  const [token, setToken] = useState(null);   // raw JWT string
  const [jwtPayload, setJwtPayload] = useState(null); // decoded token
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUserStr = localStorage.getItem("user");

    let mergedUser = null;

    // 1) If user object was saved (fullname, role, etc.)
    if (savedUserStr) {
      try {
        mergedUser = JSON.parse(savedUserStr);
      } catch (err) {
        console.error("Invalid user JSON in localStorage", err);
        localStorage.removeItem("user");
      }
    }

    // 2) If token exists, decode it safely
    if (savedToken && typeof savedToken === "string") {
      try {
        const decoded = jwtDecode(savedToken); // ✅ only called with string
        setJwtPayload(decoded);
        setToken(savedToken);

        mergedUser = {
          ...(mergedUser || {}),
          userId: decoded.userId || decoded.id,
          username: decoded.username,
          section: decoded.section,
        };
      } catch (err) {
        console.error("Invalid token in localStorage", err);
        localStorage.removeItem("token");
      }
    }

    setUser(mergedUser);
    setLoading(false);
  }, []);

  const loginUser = (jwtToken, userObj) => {
    // jwtToken MUST be string
    if (typeof jwtToken !== "string") {
      console.error("loginUser: token must be a string", jwtToken);
      return;
    }

    localStorage.setItem("token", jwtToken);
    localStorage.setItem("user", JSON.stringify(userObj));

    setToken(jwtToken);

    let decoded = null;
    try {
      decoded = jwtDecode(jwtToken);
      setJwtPayload(decoded);
    } catch (err) {
      console.error("Failed to decode token at login", err);
    }

    setUser({
      ...userObj,
      ...(decoded && {
        userId: decoded.userId || decoded.id,
        username: decoded.username ?? userObj.username,
        section: decoded.section,
      }),
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    setJwtPayload(null);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{ user, token, jwtPayload, loginUser, logoutUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// optional helper hook
export const useAuth = () => useContext(AuthContext);
