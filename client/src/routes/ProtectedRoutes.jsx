import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("userToken"); // Example authentication check

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
