import ReactDOM from 'react-dom/client';
import Router from './Router';
import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
      <Toaster />
    </AuthContextProvider>
  </React.StrictMode>
);
