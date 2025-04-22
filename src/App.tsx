import axios, { CanceledError } from 'axios';
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
    const controller = new AbortController();

    (async () => {
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal: controller.signal,
          }
        );
        setUsers(res.data);
      } catch (err: any) {
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    })();

    return () => controller.abort();
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
