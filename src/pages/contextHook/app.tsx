import React, { useContext, useState } from 'react';

const ctx = React.createContext<number>(100);

// function Test() {
//   return(
//     <div>
//       <ctx.Consumer>
//         {value => <h1>{value}</h1>}
//       </ctx.Consumer>
//     </div>
//   )
// }

// const Test = React.memo(() => {
//   console.log('render');
//   const value = useContext(ctx);
//   console.log(value,'value');

//   return <div>
//     {value}
//   </div>
// },(prevProps:Readonly<unknown>,nextProps:Readonly<unknown>) => {
//   console.log(prevProps, nextProps);
//     // 自定义优化规则
//     return true;
// })

function Test() {
  const value = useContext(ctx);
  console.log('render');

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
const MemoTest = React.memo(Test);

function OtherTest() {
  console.log('otherTest render');
  return <div>我是其他组件</div>;
}
const MemoOtherTest = React.memo(OtherTest);

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <ctx.Provider value={count}>
        <h1>父组件的count：{count}</h1>
        <button onClick={() => setCount(count + 1)}>增加+</button>
        <MemoTest />
        <MemoOtherTest />
      </ctx.Provider>
    </div>
  );
}

export default App;
