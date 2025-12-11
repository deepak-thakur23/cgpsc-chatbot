import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

export default function AdminRoute({ children }) {
    const { user, jwtPayload, loading } = useAuth();
    if (loading) return <Spinner />;

    return user && (jwtPayload.super_admin || jwtPayload.isAdmin)
        ? children
        : user && !jwtPayload.isAdmin
            ? children :
            <Navigate to="/login" replace />;
}
