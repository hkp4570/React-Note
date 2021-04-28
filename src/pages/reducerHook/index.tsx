import React, { useReducer, useState } from 'react';
import useTimer from '../../myHooks/useTimer';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'sub':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function index(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  useTimer(() => {
    setCount(count + 1);
  }, 1000);
  return (
    <div>
      count:{count}
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
    </div>
  );
}

export default index;
