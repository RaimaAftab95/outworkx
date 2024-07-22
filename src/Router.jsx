import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

import ProtectedRoutes from './utils/ProtectedRoutes';
import MyBookings from './pages/dashboard/MyBookings';
import Favorites from './pages/dashboard/Favorites';
import Bookings from './pages/dashboard/Bookings';
import Spaces from './pages/dashboard/Spaces';
import Loading from './components/Loading';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const SpaceDetails = lazy(() => import('./pages/SpaceDetails'));

const DashboardLayout = lazy(() => import('./pages/dashboard/Layout'));
const Dashboard = lazy(() => import('./pages/dashboard/Index'));

import CreateSpaceLayout from './pages/space/create/CreateSpaceLayout';
import General from './pages/space/create/General';
import Location from './pages/space/create/Location';
import Gallery from './pages/space/create/Gallery';
import Highlights from './pages/space/create/Highlights';
import Availability from './pages/space/create/Availability';
import NotFoundPage from './pages/NotFoundPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/space/:id" element={<SpaceDetails />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/space/create" element={<CreateSpaceLayout />}>
                <Route path="/space/create" element={<General />} />
                <Route path="/space/create/location" element={<Location />} />
                <Route path="/space/create/gallery" element={<Gallery />} />
                <Route
                  path="/space/create/availability"
                  element={<Availability />}
                />
                <Route
                  path="/space/create/highlights"
                  element={<Highlights />}
                />
              </Route>

              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/spaces" element={<Spaces />} />
                <Route path="/dashboard/bookings" element={<Bookings />} />
                <Route path="/dashboard/favorites" element={<Favorites />} />
                <Route path="/dashboard/my-bookings" element={<MyBookings />} />
              </Route>
            </Route>
          </Route>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
