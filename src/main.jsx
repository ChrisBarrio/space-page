import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { router } from './router';
import { RouterProvider } from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HelmetProvider>
);
