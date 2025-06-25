import { useReducer } from 'react';
import counterReducer, { incrementAction, resetAction } from './counterReducer';

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({count})
      <button
        onClick={() => dispatch(incrementAction())}
        className='btn btn-primary mx-1'
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(resetAction())}
        className='btn btn-primary mx-1'
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
