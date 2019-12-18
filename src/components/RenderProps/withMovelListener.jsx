import React,{PureComponent} from 'react';
import { Card } from 'antd';
import styles from '@/components/RenderProps/style.css';

export default function withMovelListener(Comp) {
  return class MovelListener extends PureComponent{
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
          <div ref={this.divRef} className={styles.point} onMouseMove={(e)=>this.handleMove(e)} >
              <Comp {...this.props} x={this.state.x} y={this.state.y} />
          </div>
        </Card>
      );
    }
  }
}
