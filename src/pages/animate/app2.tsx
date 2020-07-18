import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './app2.css';

function Comp1({ visible }) {
  return (
    <CSSTransition appear mountOnEnter in={visible} timeout={1000}>
      <h1 className="title">组件1</h1>
    </CSSTransition>
  );
}
function Comp2({ visible }) {
  return (
    <CSSTransition appear mountOnEnter in={visible} timeout={1000}>
      <h1 className="title">组件2</h1>
    </CSSTransition>
  );
}
function App() {
  const [showComp1, setShowComp1] = useState(true);
  return (
    <div className="container">
      <div className="comp-container">
        <Comp1 visible={showComp1} />
        <Comp2 visible={!showComp1} />
        <button onClick={() => setShowComp1(!showComp1)}>切换状态</button>
      </div>
    </div>
  );
}

export default App;
