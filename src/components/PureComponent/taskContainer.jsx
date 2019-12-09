import React, { Component } from 'react';
import TaskList from './taskList';
import AddTask from './addTask';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[]
    };
  };

  componentDidMount() {
    let ts = [];
    for (let i = 1; i <= 10 ; i++) {
      ts.push({
        name:`任务${i}`,
        isFinish:Math.random() > 0.5
      })
    }
    this.setState({
      tasks:ts
    });
  };
  handleAdd = newTask => {
    this.setState({
      tasks:[...this.state.tasks,newTask]
    })
  }

  render() {
    console.log('taskContainer render' + this.state.tasks.length);
    return (
      <div>
        <AddTask
          onAdd={this.handleAdd()}
        />
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}
