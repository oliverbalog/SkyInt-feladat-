import { Outlet, createBrowserRouter } from 'react-router-dom';
import Homepage from './views/Home/Home';
import Navigation from './components/Navigation/views/Navigation';
import Honeys from './views/Honey/Honeys';
import Protected from './components/Protected';
import Login from './components/Login/views/Login';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: (
          <Protected>
            <Homepage />
          </Protected>
        ),
      },
      {
        path: '/honeys',
        element: (
          <Protected>
            <Honeys />
          </Protected>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
