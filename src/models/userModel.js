// ✅ Frontend User Model

const UserModel = (form) => ({
    fullname: form.get("fullname")?.trim(),
    username: form.get("created_username")?.trim().toLowerCase(),
    email: form.get("email")?.trim().toLowerCase(),
    mobile: form.get("mobile")?.trim(),
    section: form.get("section")?.trim(),
    isAdmin: form.get("role") === "admin",
    password: form.get("created_password"),
});
export default UserModel;