import React, {Component} from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({ counter: this.state.counter+1 });
    }
    render() {
        if(this.state.counter === 5){
            throw new Error('我抛出错误了');
        }
        return (
            <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        );
    }
}

export default BuggyCounter;