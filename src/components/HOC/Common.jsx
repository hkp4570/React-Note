import React from 'react';

export class A extends React.PureComponent{
  render() {
    return(
      <div>A{this.props.a}</div>
    )
  }
}

export class B extends React.PureComponent{
  render() {
    return(
      <div>B{this.props.b}</div>
    )
  }
}
