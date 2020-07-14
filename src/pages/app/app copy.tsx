import React, { Component } from 'react';

/**
 * 节点首次渲染生成的DOM树   dom节点  文本节点  空节点
 */
class app extends Component {
  render() {
    return (
      <div className="assaf">
        <h1>
          标题
          {['abc', null, <p>段落</p>]}
        </h1>
        <p>{undefined}</p>
      </div>
    );
  }
}

export default app;
