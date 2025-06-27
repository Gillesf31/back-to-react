import { useContext } from 'react';
import { useAuthStore } from './auth';
import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/store';
import TasksContext from './tasks/tasksContext';

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { user } = useAuthStore();
  const count = useCounterStore((s) => s.count);

  console.log('Render Navbar');

  return (
    <nav className='navbar d-flex justify-content-between'>
      <span>{user} is logged.</span>
      <span className='badge text-bg-secondary'>{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
