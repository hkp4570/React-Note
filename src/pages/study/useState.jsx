import React,{useState} from 'react';
import { Card,Divider } from 'antd';

/**
 * 一个函数组件中可以使用多个hook
 * @param props
 * @returns {*}
 */
export default (props) => {
  console.log('render');
  const [ n,setN ] = useState(0);
  const [ visible,setVisible ] = useState(true);
  const [ data, setData ]= useState({
    x:1,
    y:2
  });

  return (
    <Card>
      <div style={{ display: visible ? 'block' : 'none' }}>
        <button
          onClick={() => setN( n - 1)}
        >-</button>
        <span>{n}</span>
        <button
          onClick={
            () => {
              // setN( n + 1);   //不会立刻改变，事件完成之后一起改变
              // setN( n + 1);   //此时，n的值仍然是0


              setN(prevN => prevN + 1);   //传入函数，会在事件完成后统一执行
              setN(prevN => prevN + 1);
            }
          }
        >+</button>
      </div>
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
      <Divider type={'horizontal'} />
      <div>
        <p>
          x:{data.x}y:{data.y}
        </p>
        <button onClick={
          () => setData({
            ...data,
            x:data.x + 1,
            y:data.y + 1
          })
        }>+</button>
      </div>
    </Card>
  );
}

