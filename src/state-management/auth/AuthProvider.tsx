import { ReactNode, useReducer } from 'react';
import loginStatusReducer from './loginStatusReducer';
import UserContext from './userContext';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, dispatch] = useReducer(loginStatusReducer, '');

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
