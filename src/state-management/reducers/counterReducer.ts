export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

type Action = {
  type: typeof INCREMENT | typeof DECREMENT | typeof RESET;
};

export const incrementAction = () => ({ type: INCREMENT } as const);
export const decrementAction = () => ({ type: DECREMENT } as const);
export const resetAction = () => ({ type: RESET } as const);

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
