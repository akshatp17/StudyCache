import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route element={<MainLayout />}>

                        {/* Normal Routes : Unprotected Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />

                        {/* Protected Routes */}
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes
