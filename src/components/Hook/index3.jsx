import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

/**
 * 需求，副作用在组件第一次渲染时执行一次，组件卸载时执行一次
 * @param props
 * @returns {*}
 * @constructor
 */
function Test(props) {
  const [,foreUpdate] = useState({});
  console.log('渲染组件');
  useEffect(() => {
    console.log('执行副作用 仅挂载时运行一次');
    return () => {
      console.log('清理副作用 仅卸载时运行一次');
    }
  },[]);  //使用空数组作为依赖项，则副作用函数仅在挂载的时候运行

  return(
    <h1>test
      <button onClick={() => foreUpdate({})}>强制刷新</button>
    </h1>
  )
}

export default (props) => {
  const [visible,setVisible] = useState(true);
  return (
    <Card>
      <div>
        {
          visible && (
           <Test />
          )
        }
      </div>

      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </Card>
  );
}


