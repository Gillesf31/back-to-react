import axios, { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {set} from "zod";

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

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    axios.delete(`https://jsonplaceholder.typicode.com/xusers/${user.id}`)
        .catch(error => {
          setError(error.message);
          setUsers(originalUsers);
        })
  }

  const addUser = () => {
    const originalUsers = [...users];

    const lastId = users.reduce((max, user) => Math.max(max, user.id), 0);

    const user: User = { id: lastId + 1, name: 'John Doe' };

    setUsers([user, ...users]);

    axios.post('https://jsonplaceholder.typicode.com/users', user)
        .then(res => {
          setUsers([res.data, ...users])
        })
        .catch(error => {
          setError(error.message);
          setUsers(originalUsers);
        })
  }

  return (
    <>
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>Add</button>
      <ul className='list-group'>
        {users.map((user: User) => (
          <li key={user.id} className='list-group-item d-flex justify-content-between'>{user.name}
            <button className='btn btn-outline-danger' onClick={() => deleteUser(user)}>Delete</button></li>
        ))}
      </ul>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
}

export default App;
