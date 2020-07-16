import React, { useState } from 'react';

window.arr = [];

function App() {
  console.log('useState render'); // 改变state重新渲染
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({ a: 1, b: 2 }); // 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。
  const [, forceUpdate] = useState({});
  window.arr.push(setN); // 应用不变，节约空间，  window.arr[0] === window.arr[1]  true

  return (
    <div>
      <p style={{ display: visible ? 'block' : 'none' }}>
        <button onClick={() => setN(n - 1)}>-</button>
        <span>{n}</span>
        <button onClick={() => setN(n + 1)}>+</button>
      </p>
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
      <div>
        <div>
          {' '}
          a:{data.a},b:{data.b}
        </div>
        <div>
          <button onClick={() => setData({ ...data, a: data.a + 1 })}>
            改变a
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => forceUpdate({})}>强制刷新</button>
      </div>
    </div>
  );
}

export default App;
