import React from 'react';
import useAllStudent from '@/myHooks/useAllStudent';

function Test() {
  const stus = useAllStudent();
  console.log(stus);
  const list = stus.map(ele => <li key={ele.id}>{ele.name}</li>);
  return <ul>{list}</ul>;
}

function App3(props) {
  return <Test />;
}

export default App3;
