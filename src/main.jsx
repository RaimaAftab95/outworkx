import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Router from './Router';
import React from 'react';

import store from './lib/store';

import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
