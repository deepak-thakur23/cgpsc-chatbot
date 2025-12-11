export function createLoginModel(username = "", password = "") {
    return {
        username: username.trim(),
        password: password.trim(),
    };
}

export function validateLoginModel({ username, password }) {
    if (!username) return { ok: false, message: "Username is required" };
    if (!password) return { ok: false, message: "Password is required" };
    if (password.length < 8)
        return { ok: false, message: "Password must be at least 8-12 characters" };

    return { ok: true };
}
