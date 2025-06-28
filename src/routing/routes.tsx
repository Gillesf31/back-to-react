import { createBrowserRouter } from 'react-router-dom';
import ContactPage from './ContactPage';
import ErrorPage from './ErrorPage';
import HomePage from './Homepage';
import Layout from './Layout';
import LoginPage from './LoginPage';
import PrivateRoutes from './PrivateRoutes';
import UserDetail from './UserDetail';
import UsersPage from './UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
        children: [
          {
            path: ':id',
            element: <UserDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
