import React, { Component } from 'react';
import { Card,Button } from 'antd';
import List from './list';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      list:[] ,
    };
  };

  componentDidMount() {

  };
  onChange(e){
    this.setState({
      value:e.target.value
    });
  };

  handleAdd(){
    this.setState({
      list:[...this.state.list,this.state.value]
    });
  }

  render() {
    console.log('index render');
    return (
      <Card>
        <input type="text" onChange={(e) => this.onChange(e)}/>
        <Button onClick={() => this.handleAdd()}>添加</Button>
        <List list={this.state.list} />
      </Card>
    );
  }
}
