import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const ref = React.createRef();
window.timer = null;

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

/**
 * 此组件应该用大写字母开头  useEffect有第二个数组参数的情况
 * 第一个参数为函数参数 执行副作用
 * @param props
 * @returns {*}
 * @constructor
 */
function MoveBlock(props) {

  useEffect(() => {
    console.log('执行副作用');
    stop();
    const div = ref.current;
    let curTimes = 0;
    const disX = props.left / 1000;
    const disY = props.top / 1000;
    window.timer = setInterval(()=>{
      curTimes ++;
      const newLeft = curTimes * disX;
      const newTop = curTimes * disY;
      div.style.left = newLeft + 'px';
      div.style.top = newTop + 'px';
      if(curTimes === 1000){
        stop();
      }
    },10);

    return () => {
      stop();
    }
  },[props.left,props.top]);

  return(
    <div
      ref = {ref}
      style={{
        position:'absolute',
        left:0,
        top:0,
        width:100,
        height:100,
        backgroundColor:'orange'
      }}
    />
  )
}

export default (props) => {
  const [point,setPoint] = useState({x:100,y:100});
  const [visible,setVisible] = useState(true);
  const tstX = React.createRef();
  const tstY = React.createRef();
  return (
    <Card>
      <div style={{ paddingTop:200 }}>
        {
          visible && (
            <div style={{ display:'relative' }}>
              <div>
                <input type="number" ref={tstX} />
                <input type="number" ref={tstY} />
                <button onClick={() => setPoint({
                  x:tstX.current.value,
                  y:tstY.current.value
                })}>确定</button>
              </div>
              <MoveBlock left={point.x} top={point.y} />
            </div>
          )
        }
      </div>

      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </Card>
  );
}


