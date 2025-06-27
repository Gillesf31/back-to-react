import './App.css';
import { AuthProvider } from './state-management/auth';
import { Counter } from './state-management/counter';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import { TasksProvider } from './state-management/tasks';

function App() {
  return (
    <>
      <Counter />
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
