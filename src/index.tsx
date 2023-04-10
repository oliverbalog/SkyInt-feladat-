import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { userStore } from './stores/userStore';
import { Provider } from 'react-redux';

const domNode = document.getElementById('root');

const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Provider store={userStore}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
