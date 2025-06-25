import { useReducer } from 'react';
import './App.css';
import TasksContext from './state-management/contexts/tasksContext';
import UserContext from './state-management/contexts/userContext';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import loginStatusReducer from './state-management/reducers/loginStatusReducer';
import taskListReducer from './state-management/reducers/taskListReducer';

function App() {
  const [tasks, dispatchTasks] = useReducer(taskListReducer, []);
  const [user, dispatchUser] = useReducer(loginStatusReducer, '');

  return (
    <UserContext.Provider value={{ user, dispatch: dispatchUser }}>
      <TasksContext.Provider value={{ tasks, dispatch: dispatchTasks }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
