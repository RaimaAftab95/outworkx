import ReactDOM from 'react-dom/client';
import Router from './Router';
import React from 'react';

import { AuthContextProvider } from './context/AuthContext';
import { CreateBookingContextProvider } from './context/CreateBookingContext';
import { CreateSpaceContextProvider } from './context/CreateSpaceContext';
import { Toaster } from 'react-hot-toast';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CreateSpaceContextProvider>
        <CreateBookingContextProvider>
          <Router />
          <Toaster />
        </CreateBookingContextProvider>
      </CreateSpaceContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
