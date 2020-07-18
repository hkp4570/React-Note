import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './app3.css';

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition appear timeout={2000} key={show}>
          <h1>{show ? 'title1' : 'title2'}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}

export default App;
