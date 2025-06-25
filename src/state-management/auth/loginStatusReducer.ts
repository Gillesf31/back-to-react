export const LOGIN_ACTION = 'LOGIN';
export const LOGOUT_ACTION = 'LOGOUT';

export type LoginAction = {
  type: typeof LOGIN_ACTION;
  payload: string;
};

export type LogoutAction = {
  type: typeof LOGOUT_ACTION;
};

export type LoginStatusAction = LoginAction | LogoutAction;

export const loginAction = (user: string) =>
  ({
    type: LOGIN_ACTION,
    payload: user,
  } as const);

export const logoutAction = () => ({ type: LOGOUT_ACTION } as const);

const loginStatusReducer = (
  state: string,
  action: LoginStatusAction
): string => {
  switch (action.type) {
    case LOGIN_ACTION:
      return action.payload;
    case LOGOUT_ACTION:
      return '';
    default:
      return state;
  }
};

export default loginStatusReducer;
