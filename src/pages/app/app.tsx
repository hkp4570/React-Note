import React, { Component } from 'react';

/**
 *
 */
export default class app extends Component {
  render() {
    return (
      <div>
        <Comp1 />
      </div>
    );
  }
}

class Comp1 extends Component {
  state = {
    a: 123,
    b: 'abc',
  };
  componentDidUpdate() {
    console.log('comp1  componentDidUpdate');
  }
  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
        <Comp2 n={this.state.b} />
        <button
          onClick={() =>
            this.setState({
              a: 321,
              b: 'cba',
            })
          }
        >
          点击
        </button>
      </div>
    );
  }
}
function Comp2(props: any) {
  return (
    <div>
      <h1 id={'title'}>{props.n}</h1>
      <Comp3 n={props.n} />
    </div>
  );
}
class Comp3 extends Component<any> {
  componentDidUpdate() {
    console.log('comp3  componentDidUpdate');
  }
  render() {
    const title = document.getElementById('title');
    if (title) {
      console.log(title.innerHTML);
    } else {
      console.log(title);
    }
    return (
      <div>
        <h1>{this.props.n}</h1>
      </div>
    );
  }
}
