import { useContext } from 'react';
import UserContext from './contexts/userContext';
import { loginAction, logoutAction } from './reducers/loginStatusReducer';

const LoginStatus = () => {
  const { user, dispatch } = useContext(UserContext);

  if (user) {
    return (
      <>
        <div>
          <span className='mx-2'>{user}</span>
          <a onClick={() => dispatch(logoutAction())} href='#'>
            Logout
          </a>
        </div>
      </>
    );
  }
  return (
    <div>
      <a onClick={() => dispatch(loginAction('gilles.ferrand'))} href='#'>
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
