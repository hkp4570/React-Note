import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './task';
export default class extends Component {
  //接收一个数组，数组的每一项是对象，对象中有两个值
  static propTypes = {
    tasks:PropTypes.arrayOf(PropTypes.shape({
      name:PropTypes.string.isRequired,
      isFinish:PropTypes.bool.isRequired,
    }))
  };

  constructor(props) {
    super(props);
    this.state = {
      task:[]
    };
  };

  componentDidMount() {
    let task = [];
    for (let i = 1; i <= 10 ; i++) {
      task.push(`任务${i}`);
    }

    this.setState({
      task:task
    });
  };

  render() {
    console.log('taskList render');
    return (
      <ul>
        {
          this.props.tasks.map((item,index) => (
            <Task
              key={index}
              {...item}
            />
          ))
        }
      </ul>
    );
  }
}
