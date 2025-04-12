import React from "react";
import { Outlet } from "react-router-dom"; // <-- Important for nested routes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children || <Outlet />} {/* Fallback to Outlet if children not passed */}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
