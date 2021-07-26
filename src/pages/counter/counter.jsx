import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, incrementAsync } from '../../store/counter/counterSlice';

function Counter(props) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementAsync(2))}>async +</button>
    </div>
  );
}

export default Counter;