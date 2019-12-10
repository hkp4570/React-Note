import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import { ObjectEqual } from '../../../utils/helper';

export default class extends Component {

  static propTypes = {
    name:PropTypes.string.isRequired,
    isFinish:PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {

  };

  shouldComponentUpdate(nextProps,nextState){
    console.log('task 是否要重新渲染');
        if(ObjectEqual(this.props,nextProps) && ObjectEqual(this.state,nextState)){
          return false;
        }
        return true;
  }

  render() {
    console.log('task render');
    return (
        <li className={this.props.isFinish ? `${styles.finish}` : ''}>
          {this.props.name}
        </li>
    );
  }
}
