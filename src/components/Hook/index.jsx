import React,{useState,useEffect} from 'react';

export default (props) => {
  const [ n,setN ] = useState(0);
  useEffect(() => {
    document.title = `计算器${n}`
  });
  return (
    <div>
      {n}
      <button
        onClick={() => setN( n + 1 )}
      >+</button>
    </div>
  );
}
