import { createContext, Dispatch } from 'react';
import { LoginStatusAction } from './loginStatusReducer';

type UserContextType = {
  user: string;
  dispatch: Dispatch<LoginStatusAction>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
