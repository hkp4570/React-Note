import React, { useState, useEffect } from 'react';

function Test() {
  const [, forceUpdate] = useState({});
  console.log('渲染Test');
  useEffect(() => {
    console.log('挂载函数，仅在挂载时运行一次');
    return () => {
      console.log('清理函数，仅在卸载时运行一次');
    };
  }, []); // 使用空数组作为依赖项，则副作用函数仅在挂载的时候运行
  return (
    <div>
      <button onClick={() => forceUpdate({})}>强制刷新</button>
    </div>
  );
}
function App(props) {
  return <div></div>;
}

export default App;
