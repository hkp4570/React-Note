import React, { useCallback, useState } from 'react';

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
  const handleClick = useCallback(() => {
    setTxt(txt + 1);
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
 * 改变n值，本应该只是parent组件渲染，但是test也进行的渲染
 * 但是传递给test的 txt的值并没有发生变化，并且test组件使用PureComponent
 * 所有只能是onClick函数引用发生了变化
 * */
function App(props) {
  return <Parent />;
}

export default App;
