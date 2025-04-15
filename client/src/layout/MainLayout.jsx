import React from "react";
import { Outlet } from "react-router-dom"; // <-- Important for nested routes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Noti from "../components/Noti";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <Noti noti="This is a test notification" link="/policy" />  */}
            <Navbar />
            <main className="flex-grow">
                {children || <Outlet />} {/* Fallback to Outlet if children not passed */}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
