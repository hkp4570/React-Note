// import React, { useState, useEffect } from 'react';
//
// let n = 1;
// // 副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此，尽量保持副作用函数稳定，否则控制起来会比较复杂。
// // 不要使用
// function func1() {
//   console.log('odd 副作用函数');
//   return () => {
//     console.log('odd 清理函数');
//   };
// }
//
// function func2() {
//   console.log('even 副作用函数');
//   return () => {
//     console.log('even 清理函数');
//   };
// }
//
// export default function App() {
//   const [, forceUpdate] = useState({});
//   useEffect(n % 2 === 0 ? func2 : func1);
//   n++;
//   return (
//     <div>
//       <button
//         onClick={() => {
//           forceUpdate({});
//         }}
//       >
//         强制刷新
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';

window.timer = null;
function stop() {
  clearInterval(window.timer);
  window.timer = null;
}
function MoveBox(props: any) {
  const ref = React.createRef();
  const { x, y } = props;
  useEffect(() => {
    const div = ref.current;
    const disX = x / 1000;
    const disY = y / 1000;
    let time = 0;
    window.timer = setInterval(() => {
      time++;
      const newLeft = parseInt(time * disX);
      const newTop = parseInt(time * disY);
      div.style.left = newLeft + 'px';
      div.style.top = newTop + 'px';
      if (time === 1000) {
        stop();
      }
    }, 10);
    return stop;
  }, [x, y]);
  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#f40',
      }}
    />
  );
}

function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ paddingTop: 200 }}>
      {visible && (
        <div>
          x:
          <input
            type="number"
            value={point.x}
            onChange={e => setPoint({ ...point, x: parseInt(e.target.value) })}
          />
          y:
          <input
            type="number"
            value={point.y}
            onChange={e => setPoint({ ...point, y: parseInt(e.target.value) })}
          />
          <MoveBox x={point.x} y={point.y} />
        </div>
      )}
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </div>
  );
}

export default App;
