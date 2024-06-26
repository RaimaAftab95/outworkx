import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingAnimation from './components/shared/LoadingAnimation';
import React, { lazy, Suspense } from 'react';

const BookingHistory = lazy(() => import('./pages/BookingHistory'));
const CreateSpace = lazy(() => import('./pages/CreateSpace'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const ReserveSpace = lazy(() => import('./pages/ReserveSpace'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const SpaceDetails = lazy(() => import('./pages/SpaceDetails'));
const Statistics = lazy(() => import('./pages/Statistics'));
const PrivacyPolicy = lazy(() => import('./pages/ThePrivacyPolicy'));
const TermsAndCondition = lazy(() => import('./pages/TermsAndCondition'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/space/:id',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <SpaceDetails />
      </Suspense>
    )
  },
  {
    path: '/space/create',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <CreateSpace />
      </Suspense>
    )
  },
  {
    path: '/reserve-space',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <ReserveSpace />
      </Suspense>
    )
  },
  {
    path: '/sign-up',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Signup />
      </Suspense>
    )
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Signin />
      </Suspense>
    )
  },
  {
    path: '/booking-history',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <BookingHistory />
      </Suspense>
    )
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Dashboard />
      </Suspense>
    )
  },
  {
    path: '/statistics',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <Statistics />
      </Suspense>
    )
  },
  {
    path: '/privacy-policy',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <PrivacyPolicy />
      </Suspense>
    )
  },
  {
    path: '/terms-and-conditions',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <TermsAndCondition />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingAnimation />}>
        <ErrorPage />
      </Suspense>
    )
  }
]);

export default function Router() {
  return (
    <RouterProvider router={router}>
      <Toaster position="top-center" reverseOrder={false} />
    </RouterProvider>
  );
}
