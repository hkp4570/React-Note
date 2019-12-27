/**
 * 类组件中使用PureComponent进行性能优化
 * 函数组件中使用React.memo()包裹函数组件进行性能优化
 */
/* eslint-disable */
import React from 'react';
function List(props) {
  console.log('list render');
  const list = [
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'JavaScript' },
  ];
  return (
    <ul>
      {
        props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  );
}
export default React.memo(List);
