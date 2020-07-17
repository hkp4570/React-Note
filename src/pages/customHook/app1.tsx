import React, { useState } from 'react';
import useTimer from '@/myHooks/useTimer';

function Test() {
  useTimer(() => {
    console.log('定时器中的副作用操作');
  }, 1000);
  return <div>Test</div>;
}
/* 自定义hook 定时器 */
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && <Test />}
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </div>
  );
}

export default App;
