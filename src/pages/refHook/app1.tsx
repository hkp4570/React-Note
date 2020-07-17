import React, { useRef, useState } from 'react';
window.arr = [];
function App(props) {
  // const ref = React.createRef(); // 使用此函数创建的ref每次都不同
  const ref = useRef();
  const [n, setN] = useState(0);
  window.arr.push(ref); // 所有添加到arr中的ref相同
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={() => console.log(ref.current.value)}>获取值</button>
      <input
        type="number"
        value={n}
        onChange={e => setN(parseInt(e.target.value))}
      />
    </div>
  );
}

export default App;
