import React, { useEffect, useRef, useState } from 'react';

function App(props) {
  const [n, setN] = useState(10);
  const timerRef = useRef();
  useEffect(() => {
    if (n === 0) {
      return;
    }
    timerRef.current = setTimeout(() => {
      console.log(n);
      setN(n - 1);
    }, 1000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [n]);
  return <div>{n}</div>;
}

export default App;
