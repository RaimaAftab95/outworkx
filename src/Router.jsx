import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../store';
import Header from './components/shared/Header';
import MainLoading from './components/shared/MainLoading';
import BookingHistory from './pages/BookingHistory';
import CreateSpace from './pages/CreateSpace';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Launch from './pages/Launch';
import ReserveSpace from './pages/ReserveSpace';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SpaceDetails from './pages/SpaceDetails';
import Statistics from './pages/Statistics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndCondition from './pages/TermsAndCondition';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/spaces/:id', element: <SpaceDetails /> },
  { path: '/create-space', element: <CreateSpace /> },
  { path: '/launch', element: <Launch /> },
  { path: '/reserve-space', element: <ReserveSpace /> },
  { path: '/sign-up', element: <Signup /> },
  { path: '/sign-in', element: <Signin /> },
  { path: '/booking-history', element: <BookingHistory /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/statistics', element: <Statistics /> },
  { path: '/privacy-policy', element: <PrivacyPolicy /> },
  { path: '/terms-and-conditions', element: <TermsAndCondition /> }
]);

function ConditionalHeader() {
  const { pathname } = useLocation();

  if (
    pathname !== '/create-space' &&
    pathname !== '/sign-up' &&
    pathname !== '/sign-in'
  ) {
    return <Header />;
  }
  return null;
}

function Router() {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuthStore();

  useEffect(() => {
    setIsLoading(true);
    let auth = localStorage.getItem('auth');
    auth = JSON.parse(auth);

    if (auth?.token) {
      setAuth(auth);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setAuth]);

  return (
    <>
      {isLoading && <MainLoading />}
      <div
        className={`transition-all duration-500 ${
          isLoading ? 'invisible opacity-0' : 'visible opacity-100'
        }`}
      >
        <RouterProvider router={router}>
          <ConditionalHeader />
          <Toaster position="top-center" reverseOrder={false} />
        </RouterProvider>
      </div>
    </>
  );
}

export default Router;
