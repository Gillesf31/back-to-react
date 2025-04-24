import './App.css';
import useUsers from './hooks/userUsers';
import userService, { User } from './services/user-service';

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];

    const lastId = users.reduce((max, user) => Math.max(max, user.id), 0);

    const user: User = { id: lastId + 1, name: 'John Doe' };

    setUsers([user, ...users]);

    userService
      .create(user)
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

    userService.update(updatedUser).catch((error) => {
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
