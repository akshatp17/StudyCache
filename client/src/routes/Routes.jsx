import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import ProtectedRoute from './ProtectedRoutes';
import MainLayout from '../layout/MainLayout';
import Loading from '../pages/Loading';
import Error from '../pages/Error';
import Disclaimer from '../pages/Disclaimer';

const Home = React.lazy(() => import('../pages/Home'));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* Error page for all unhandled routes */}
                    <Route path='*' element={<Error />} />

                    <Route element={<MainLayout />}>

                        {/* Normal Routes : Unprotected Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/policy" element={<Disclaimer />} />

                        {/* Protected Routes */}
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes
