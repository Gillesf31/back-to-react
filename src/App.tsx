import './App.css';
import { Counter } from './state-management/counter';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import { TasksProvider } from './state-management/tasks';

function App() {
  return (
    <>
      <Counter />
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </>
  );
}

export default App;
