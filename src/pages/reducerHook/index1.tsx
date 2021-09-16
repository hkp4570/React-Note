import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'sub':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
  }
}

function init(count: number) {
  return { count };
}

// 惰性初始化
function index1({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div>
      <h1>count:{state.count}</h1>
      <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>
        初始化
      </button>
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'sub' })}>sub</button>
    </div>
  );
}

export default index1;
