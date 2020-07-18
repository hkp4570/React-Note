import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import 'animate.css';

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          timeout={1000}
          key={show}
          classNames={{
            exit: 'animate__bounceOut',
            enter: 'animate__bounceIn',
          }}
        >
          <h1 className="fast">{show ? 'title1' : 'title2'}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}

export default App;
