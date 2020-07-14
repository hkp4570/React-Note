import React, { Component } from 'react';

function Comp1(props: any) {
  return <h1>Comp1 {props.n}</h1>;
}
/**
 * 函数节点首次渲染生成的DOM树
 */
function App(props: any) {
  return (
    <div>
      <Comp1 n={5} />
    </div>
  );
}

export default App;

/**
 * function节点  app
 * dom节点  div
 * 函数节点 Comp1
 * dom节点 h1 ->  文本节点 comp1   props.n
 */
