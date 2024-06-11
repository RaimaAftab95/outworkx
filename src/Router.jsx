import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/spaces/:id',
    element: <SpaceDetails />
  },
  {
    path: '/create-space',
    element: <CreateSpace />
  },
  {
    path: '/launch',
    element: <Launch />
  },
  {
    path: '/reserve-space',
    element: <ReserveSpace />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/booking-history',
    element: <BookingHistory />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/statistics',
    element: <Statistics />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndCondition />
  },
  {
    path: '*',
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  }
]);

export default function Router() {
  return (
    <RouterProvider router={router}>
      <Toaster position="top-center" reverseOrder={false} />
    </RouterProvider>
  );
}
