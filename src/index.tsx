import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './views/Home/Home';

import App from './App';

const domNode = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
]);

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
