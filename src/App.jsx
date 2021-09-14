import React from 'react';
import ReactDOM from 'react-dom';

function ChildA(){
  return ReactDOM.createPortal(<div>
    <h1>childA</h1>
    <ChildB />
  </div>,document.querySelector('.modal'))
}

function ChildB(){
  return <h1>childB</h1>
}

function App() {
  
  const handleClick = e => {
    console.log('可以冒泡', e.target);
  }
  return (
    <div onClick={e => handleClick(e)}>
      <h1>APP</h1>
      <ChildA />
    </div>
  );
}

export default App;