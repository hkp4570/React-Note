import React, { Component } from 'react';
import styles from './index.css';
import Paging from '@/component/paging/index';

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:5
    };
  };
  pageChange(e){
    this.setState({
      current:e
    });
  }
  render() {
    return (
      <div className={styles.normal}>
        <Paging
          total={100}
          current={this.state.current}
          limit={5}
          panelNumber={5}
          onPageChange={(e) => this.pageChange(e)}
        />
      </div>
    );
  }
}
