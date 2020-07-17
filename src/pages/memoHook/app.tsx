import React, { useMemo, useState } from 'react';
//
function Item(props) {
  console.log('props' + props.value);
  return <li>{props.value}</li>;
}
// /*
// * useMemo 优化渲染多数据
// * */
function App(props) {
  const [n, setN] = useState(0);
  const [range] = useState({ min: 0, max: 5000 });
  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i <= range.max; i++) {
      list.push(<Item key={i} value={i} />);
    }
    return list;
  }, [range.min, range.max]);
  // const list = [];
  // for (let i = range.min; i <= range.max; i++) {
  //   list.push(<Item key={i} value={i} />)
  // }
  return (
    <div>
      <ul>{list}</ul>
      <input
        type="number"
        value={n}
        onChange={e => setN(parseInt(e.target.value))}
      />
    </div>
  );
}

export default App;
