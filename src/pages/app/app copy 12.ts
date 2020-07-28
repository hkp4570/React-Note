const React = {
  createElement (type, props, ...children) {
    return {
      type,
      props,
      children
    }
  }
}

// let div = <div id='demo'>aaa<span id="desc">bbb</span></div>;
let div = React.createElement('div',{id:'demo'},'aaa',React.createElement('span',{id:'desc'},'bbb'))

const render = (vNode, container) => {
  if( typeof vNode === 'string') {
    const text = document.createTextNode(vNode);
    return container.appendChild(text)
  }
  const { type, props, children } = vNode;
  const ele = document.createElement(type);

  for(let key in props) {
    //去掉自身的私有属性
    if(key.startsWith('__')) {
      break;
    }
    ele.setAttribute(key, props[key]);
  }

  children.forEach(item => {
    render(item, ele);
  })

  container.appendChild(ele);

}

render(div, window.root);