// src/services/api.js

// Universal base URL (supports Vite and CRA),  "http://localhost:3000" ||
const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL) ||
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_URL) ||
  "https://web-production-fce96.up.railway.app";

// ---- Auth ----
export async function login(inputType, username, password) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inputType, username, password }),
  });
  // Non-2xx? return parsed body (with message) to show error toasts
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return data;
  return data; // { token, user }
}

// ---- Chatbot ----
export async function sendChatMessage(message) {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json(); // { reply }

}
//----Audit Log-----
export async function getAuditLogs() {
  const res = await fetch(`${API_URL}/audit-logs`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.json();
}
