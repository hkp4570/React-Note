import React, { useState, useEffect } from 'react';

function Test() {
  const [, forceUpdate] = useState({});
  useEffect(() => {
    console.log('挂载函数，仅在挂载时运行一次');
    return () => {
      console.log('清理函数，仅在卸载时运行一次');
    };
  }, []); // 使用空数组作为依赖项，则副作用函数仅在挂载的时候运行
  console.log('渲染Test');
  return (
    <div>
      <button onClick={() => forceUpdate({})}>强制刷新</button>
    </div>
  );
}
function App(props) {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && <Test />}
      <button onClick={() => setVisible(!visible)}>更新</button>
    </div>
  );
}

export default App;
