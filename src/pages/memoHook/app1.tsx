import React, { useMemo, useState } from 'react';

class Test extends React.PureComponent<any> {
  render() {
    console.log('test render');
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <button onClick={this.props.onClick}>改变文本</button>
      </div>
    );
  }
}
function Parent() {
  const [n, setN] = useState(0);
  const [txt, setTxt] = useState(123);
  const handleClick = useMemo(() => {
    // 可以返回任何数据
    return () => {
      setTxt(txt + 1);
    };
  }, [txt]);
  console.log('parent render');
  return (
    <div>
      <Test txt={txt} onClick={handleClick} />
      <h1>n:{n}</h1>
      <button onClick={() => setN(n + 1)}>n+1</button>
    </div>
  );
}
/*
 *使用useMemo
 *  */
function App(props) {
  return <Parent />;
}

export default App;
