import React, { useRef, useImperativeHandle } from 'react';

/**
 * 可以将ref绑定到dom上，当时并不能获取里面的方法
 */
// function Test(props,ref) {
//   const method = () => {
//     console.log('method');
//   }
//   return(
//     <h1 ref={ref}>Test</h1>
//   )
// }
// const TestRef = React.forwardRef(Test);

// class Test extends React.Component<any, any>{
//   method(){
//     console.log('test method');
//   }
//   render() {
//     return <div>
//       Test
//     </div>;
//   }
// }

function Test(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      //如果不给依赖项，则每次运行函数组件都会调用该方法
      //如果使用了依赖项，则第一次调用后，会进行缓存，只有依赖项发生变化时才会重新调用函数
      //相当于给 ref.current = 1
      return {
        method() {
          console.log('Test Component Called');
        },
      };
    },
    [],
  );
  return <h1>Test Component</h1>;
}
const TestRef = React.forwardRef(Test);

/**
 * 获取子组件中的方法
 * @param props
 * @constructor
 */
function App(props) {
  const ref = useRef();
  return (
    <div>
      <TestRef ref={ref} />
      <button
        onClick={() => {
          ref.current.method();
          // console.log(ref.current)
        }}
      >
        获取方法
      </button>
    </div>
  );
}

export default App;
