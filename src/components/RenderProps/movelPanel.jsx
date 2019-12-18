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
  componentWillUnmount(){

  };
  handleMove(e){
    const {left,top} = this.divRef.current.getBoundingClientRect();
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
          <div ref={this.divRef} className={styles.point} onMouseMove={(e) => this.handleMove(e)}>
            <div style={{
              width: 100,
              height: 100,
              background: "#008c8c",
              position: "absolute",
              left: this.state.x - 50,
              top: this.state.y - 50
            }}
            />
          </div>
      </Card>
    );
  }
}
