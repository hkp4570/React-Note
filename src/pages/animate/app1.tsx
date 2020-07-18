import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function(props: any) {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {(state: string) => {
          return (
            <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
              this is transition
            </div>
          );
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </div>
  );
}
