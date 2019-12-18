import React from 'react';
import withMovelListener from '@/components/RenderProps/withMovelListener';
const renderDiv = (props) => {
  return (
    <div style={{
      width: 100,
      height: 100,
      background: "#008c8c",
      position: "absolute",
      left: props.x - 50,
      top: props.y - 50
    }}>

    </div>
  )
};

const renderPoint = props => {
  return (
    <div>
      x:{props.x}
      y:{props.y}
    </div>
  )
};

const MouseDiv = withMovelListener(renderDiv);
const MousePoint = withMovelListener(renderPoint);

export default function(props) {
  return (
    <div>
      <MouseDiv />
      <MousePoint />
    </div>
  );
}
