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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    (async () => {
      try {
        if (isMounted) {
          setIsLoading(true);
        }

        console.warn('try');
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal: controller.signal,
          }
        );

        if (isMounted) {
          setUsers(res.data);
        }
      } catch (err: any) {
        if (err instanceof CanceledError) return;

        if (isMounted) {
          setError(err.message);
        }
      } finally {
        console.warn('finally');
        if (isMounted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      {isLoading && <div className='spinner-border'></div>}
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
