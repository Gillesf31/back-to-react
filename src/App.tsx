import { useReducer } from 'react';
import './App.css';
import AuthProvider from './state-management/AuthProvider';
import TasksContext from './state-management/contexts/tasksContext';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import taskListReducer from './state-management/reducers/taskListReducer';

function App() {
  const [tasks, dispatchTasks] = useReducer(taskListReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: dispatchTasks }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
