import React from 'react';

export default function withLog(Comp) {
  return class extends React.PureComponent{
    componentDidMount() {
      console.log(`组件${Comp.name}被创建`);
    }
    componentWillUnmount() {
      console.log(`组件${Comp.name}被卸载`);
    }
    render() {
      return(
        <Comp {...this.props} />
      )
    }
  }
}
