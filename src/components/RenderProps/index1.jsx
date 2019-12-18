import React from 'react';
import MovelListener from './movleListener';

export default function (props) {

  const renderPoint = mouse => {
    return (
      <div>
        横坐标：{mouse.x}
        纵坐标：{mouse.y}
      </div>
    )
  };

  const renderDiv = mouse => {
    return(
      <div style={{
        width: 100,
        height: 100,
        background: "#008c8c",
        position: "absolute",
        left: mouse.x - 50,
        top: mouse.y - 50
      }}>

      </div>
    )
  };

  return (
    <div>
      <MovelListener render={renderDiv} />
      <MovelListener render={renderPoint} />
    </div>
  );
};
