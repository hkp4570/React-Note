import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import styles from './style.css';

export default class extends PureComponent {
  divRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      x:0,
      y:0
    };
  };

  componentDidMount() {

  };

  componentWillUnmount() {

  };
  handleMove(e){
    const { left,top } = this.divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    this.setState({
      x,
      y
    });
  }

  render() {
    return (
      <Card>
        <div ref={this.divRef} className={styles.point} onMouseMove={(e)=>this.handleMove(e)}>
          {
            this.props.render ? this.props.render(this.state) : ''
          }
        </div>
      </Card>
    );
  }
}
