import React, { Component } from 'react';

class Comp1 extends Component {
  render() {
    return <h1>Comp1</h1>;
  }
}
/**
 * 类节点首次渲染生成的DOM树
 */
class App extends Component {
  render() {
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}

export default App;

/**
 * 类组件节点  app
 * dom节点  div
 * 类组件节点 Comp1
 * dom节点 h1 ->  文本节点 comp1
 */
