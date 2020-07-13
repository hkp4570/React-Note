import React, { Component } from 'react'

/* Context的优化 */
const ctx = React.createContext();
class ChildB extends React.Component {

  static contextType = ctx;

  shouldComponentUpdate(nextProps, nextState) {
    console.log("运行了优化")
    return false;
  }


  render() {
    console.log("childB render");
    return (
      <h1>
        a:{this.context.a}，b:{this.context.b}
      </h1>
    );
  }
}

export default class NewContext extends Component {

  state = {
    ctx: {
      a: 0,
      b: "abc",
      changeA: (newA) => {
        this.setState({
          a: newA
        })
      }
    }
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log(this.state.ctx.a);
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  render() {
    return (
      <ctx.Provider value={this.state.ctx}>
        <div>
          <ChildB />

          <button onClick={() => {
            this.setState({ctx:{...this.state.ctx,a:this.state.ctx.a + 1}})
          }}>父组件的按钮，a加1</button>
        </div>
      </ctx.Provider>
    )
  }
}
