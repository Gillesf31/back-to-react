import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

type User = {
  id: number;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
}

export default App;
