import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import styles from '@/components/RenderProps/style.css';

export default class extends PureComponent {
  point = React.createRef();
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
    const {left,top} = this.point.current.getBoundingClientRect();
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
        <div ref={this.point} className={styles.point} onMouseMove={(e) => this.handleMove(e)} >
          <div>x坐标:{parseInt(this.state.x)}y坐标:{parseInt(this.state.y)}</div>
        </div>
      </Card>
    );
  }
}

