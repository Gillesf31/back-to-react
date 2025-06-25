import './App.css';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/Homepage';
import NavBar from './state-management/Navbar';
import TasksProvider from './state-management/TasksProvider';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
