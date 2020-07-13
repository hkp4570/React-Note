import React, { PureComponent } from 'react';

const ctx = React.createContext();
export default class Context extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      a:123,
      b:789,
      onChange:(newA) => {
        this.setState({
          a:newA
        });
      }
    };
  };

  render() {
    return (
      <div>
        <ctx.Provider value={this.state}>
          {/*<ChildB />*/}
          <ChildA />
          <button onClick={() => this.setState({a: this.state.a + 1})}>父组件的按钮a+1</button>
        </ctx.Provider>
      </div>
    );
  }
}

class ChildB extends PureComponent{
  static contextType = ctx;
  render(){
    return(
      <div>
        a:{this.context.a}b:{this.context.b}
        <button onClick={()=>this.context.onChange(this.context.a + 2)}>子组件类的按钮a+2</button>
      </div>
    )
  }
}

function ChildA() {
  return(
    <div>
      <ctx.Consumer>
        {
          value => (<h1>
            a:{value.a}
            b:{value.b}
          </h1>)
        }
      </ctx.Consumer>
    </div>
  )
}
