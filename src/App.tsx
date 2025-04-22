import { useEffect, useState } from 'react';
import './App.css';
import apiClient, { CanceledError } from './services/api-client';

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

        const res = await apiClient.get<User[]>('/users', {
          signal: controller.signal,
        });

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
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient.delete(`/users/${user.id}`).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const lastId = users.reduce((max, user) => Math.max(max, user.id), 0);

    const user: User = { id: lastId + 1, name: 'John Doe' };

    setUsers([user, ...users]);

    apiClient
      .post('/users', user)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: 'Updated User' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch(`/users/${user.id}`, updatedUser).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add
      </button>
      <ul className='list-group'>
        {users.map((user: User) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between'
          >
            {user.name}
            <div>
              <button
                className='btn btn-outline-secondary mx-1'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
}

export default App;
