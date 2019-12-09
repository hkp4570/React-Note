import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import TaskContainer from '@/components/PureComponent/taskContainer';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };
  render() {
    console.log('pureComponent render');
    return (
      <div>
        <Helmet>
          <title>pureComponent</title>
        </Helmet>
        <TaskContainer />
      </div>
    );
  }
}

