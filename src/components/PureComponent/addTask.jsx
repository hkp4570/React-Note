import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    };
  };

  componentDidMount() {

  };

  handleChange(e){
    this.setState({
      name:e.target.value
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <button
          onClick={() => this.props.onAdd &&
          this.props.onAdd({
            name:this.state.name,
            isFinish:false
          })}

        >添加任务</button>
      </div>
    );
  }
}
