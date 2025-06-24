import { useReducer } from 'react';
import './App.css';
import TasksContext from './state-management/contexts/tasksContext';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import taskListReducer from './state-management/reducers/taskListReducer';

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
