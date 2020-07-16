import React, { useState, useEffect } from 'react';

// function App() {
//   const [n,setN] = useState(0);
//   useEffect(()=>{
//     document.title = `${n}`;
//   })
//   useEffect(()=>{
//     // 可以写多个
//   })
//   return (
//     <div>
//       {n}
//       <button onClick={() => setN(n + 1)}>+</button>
//     </div>
//   );
// }
//
// export default App;

// 闭包 n 的指向  并不能实时指向当前的n
function App(props) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(n);
    }, 3000);
  });
  return (
    <div>
      <h1>{n}</h1>
      <button onClick={() => setN(n + 1)}> n+ 1</button>
    </div>
  );
}

export default App;

// 闭包导致的问题
// export default function App() {
//   const [n, setN] = useState(10)
//   useEffect(() => {
//     //仅挂载后运行
//     const timer = setInterval(() => {
//       const newN = n - 1;
//       console.log(newN)
//       setN(newN);
//       if (newN === 0) {
//         clearInterval(timer);
//       }
//     }, 1000)
//     return () => { //函数卸载时运行
//       clearInterval(timer);
//     }
//   }, [])
//   return (
//     <div>
//       <h1>{n}</h1>
//       <button onClick={() => {
//         setN(n + 1);
//       }}>n+1</button>
//     </div>
//   )
// }

// 使用依赖性解决闭包造成的问题
// function App(props) {
//   const [n, setN] = useState(10);
//   useEffect(() => {
//     if(n === 0) {
//       return ;
//     }
//     const timer = setTimeout(() => {
//       setN(n - 1)
//     },1000)
//     return () => {
//       clearTimeout(timer);
//     }
//   },[n])
//   return (
//     <div>
//       <h1>{n}</h1>
//       <button onClick={() => setN(n + 1)}>n + 1</button>
//     </div>
//   );
// }
//
// export default App;
