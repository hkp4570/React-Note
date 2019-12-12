import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

const ref = React.createRef();
window.timer = null;

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}
//此组件应该用大写字母开头  useEffect返回一个函数的情况
function MoveBlock(props) {

  useEffect(() => {
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
  });

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
  const [point,setPoint] = useState({x:0,y:0});
  const [visible,setVisible] = useState(true);
  return (
    <Card>
      <div style={{ paddingTop:200 }}>
        {
          visible && (
            <div style={{ display:'relative' }}>
              <div>
                <input type="number" value={point.x} onChange={(e)=>{
                  setPoint({
                    ...point,
                    x:parseInt(e.target.value)
                  })
                }}/>
                <input type="number" value={point.y} onChange={e => {
                  setPoint({
                    ...point,
                    y:parseInt(e.target.value)
                  })
                }}/>
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


