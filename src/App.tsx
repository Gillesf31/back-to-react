import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      });
  }, []);

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
