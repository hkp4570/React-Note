import React, { useEffect, useState } from 'react';
import { connect } from 'dva';

function Test({ data }) {
  console.log('test render');

  return <div>{data}</div>;
}

// connect 有memeo和shouldComponentUpdate的功能
const MemoTest = connect(({ global }) => ({
  global,
}))(Test);

function app() {
  const [count, setCount] = useState(1);
  const [txt, setTxt] = useState<number>(100);
  console.log('app render');
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <MemoTest data={txt} />
    </div>
  );
}
``;

export default app;
