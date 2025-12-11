// src/services/adminApi.js
const API_BASE = (import.meta.env?.VITE_API_URL) || "http://localhost:3000" || "https://web-production-fce96.up.railway.app";

function authHeaders(token) {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

// Users
export const fetchUsers = async (token) =>
    (await fetch(`${API_BASE}/api/admin/users`, { headers: authHeaders(token) })).json();

export const createUser = async (token, payload) =>
    (await fetch(`${API_BASE}/api/admin/users`, {
        method: "POST", headers: authHeaders(token), body: JSON.stringify(payload),
    })).json();

export const updateUser = async (token, id, payload) =>
    (await fetch(`${API_BASE}/api/admin/users/${id}`, {
        method: "PUT", headers: authHeaders(token), body: JSON.stringify(payload),
    })).json();

export const setUserActive = async (token, id, is_active) =>
    (await fetch(`${API_BASE}/api/admin/users/${id}/active`, {
        method: "PATCH", headers: authHeaders(token), body: JSON.stringify({ is_active }),
    })).json();

export const setUserPassword = async (token, id, password) =>
    (await fetch(`${API_BASE}/api/admin/users/${id}/password`, {
        method: "PATCH", headers: authHeaders(token), body: JSON.stringify({ password }),
    })).json();

// Notifications
export const fetchNotifications = async (token) =>
    (await fetch(`${API_BASE}/api/admin/notifications`, { headers: authHeaders(token) })).json();

export const createNotification = async (token, payload) =>
    (await fetch(`${API_BASE}/api/admin/notifications`, {
        method: "POST", headers: authHeaders(token), body: JSON.stringify(payload),
    })).json();

export const updateNotification = async (token, id, payload) =>
    (await fetch(`${API_BASE}/api/admin/notifications/${id}`, {
        method: "PUT", headers: authHeaders(token), body: JSON.stringify(payload),
    })).json();

export const setNotificationActive = async (token, id, is_active) =>
    (await fetch(`${API_BASE}/api/admin/notifications/${id}/active`, {
        method: "PATCH", headers: authHeaders(token), body: JSON.stringify({ is_active }),
    })).json();
