import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };
  render() {
    return (
      <div>
        <Helmet>
          <title>hook</title>
        </Helmet>
          hook
      </div>
    );
  }
}

