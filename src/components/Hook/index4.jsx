
/**
 *  副作用函数中，如果使用了函数上下文中的变量，
 *  则由于闭包的影响，会导致副作用函数中变量不会实时变化。
 *  useEffect中是不会实时获取到当前的状态
 */
import React, { useState, useEffect } from 'react';

export default (props) => {
  const [n,setN] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(n);
    },3000)
  });
  return (
    <div>
      {n}
      <button onClick={() => setN( n + 1)}>+1</button>
    </div>
  );
}


