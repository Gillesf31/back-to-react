import { ReactNode, useReducer } from 'react';
import UserContext from './contexts/userContext';
import loginStatusReducer from './reducers/loginStatusReducer';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(loginStatusReducer, '');

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
