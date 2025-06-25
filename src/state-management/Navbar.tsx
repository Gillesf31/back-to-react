import { useContext } from 'react';
import TasksContext from './contexts/tasksContext';
import UserContext from './contexts/userContext';
import LoginStatus from './LoginStatus';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { user } = useContext(UserContext);

  return (
    <nav className='navbar d-flex justify-content-between'>
      <span>{user} is logged.</span>
      <span className='badge text-bg-secondary'>{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
