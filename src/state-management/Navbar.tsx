import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import UserContext from './auth/userContext';
import useCounterStore from './counter/store';
import TasksContext from './tasks/tasksContext';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { user } = useContext(UserContext);
  const { count } = useCounterStore();

  return (
    <nav className='navbar d-flex justify-content-between'>
      <span>{user} is logged.</span>
      <span className='badge text-bg-secondary'>{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
