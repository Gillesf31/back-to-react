import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Homepage';
import UserListPage from './UserListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/users',
    element: <UserListPage />,
  },
]);

export default router;
