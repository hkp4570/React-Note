import React, { Component } from 'react'

class ChildB extends React.Component {

  /* 改变state执行此函数  改变Context不执行 */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("运行了优化")
    return false;
  }


  render() {
    console.log("childB render");
    return (
      <h1>
        a:{this.props.a}，b:{this.props.b}
      </h1>
    );
  }
}

export default class NewContext extends Component {

  state = {
    a: 0,
    b: "abc",
    changeA: (newA) => {
      this.setState({
        a: newA
      })
    }
  }

  render() {
    return (
      <div>
        <ChildB {...this.state} />
        <button onClick={() => {
          this.setState({
            a: this.state.a + 1
          })
        }}>父组件的按钮，a加1</button>
      </div>
    )
  }
}
