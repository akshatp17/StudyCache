import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import ProtectedRoute from './ProtectedRoutes';
import MainLayout from '../layout/MainLayout';
import Loading from '../pages/Loading';
import Error from '../pages/Error';

const Home = React.lazy(() => import('../pages/Home'));
const Disclaimer = React.lazy(() => import('../pages/Disclaimer'));
const Resources = React.lazy(() => import('../pages/Resources'));
const Upload = React.lazy(() => import('../pages/Upload'));
const Request = React.lazy(() => import('../pages/Request'));

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
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/request" element={<Request />} />
                        <Route path="/policy" element={<Disclaimer />} />

                        {/* Protected Routes */}
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRoutes
