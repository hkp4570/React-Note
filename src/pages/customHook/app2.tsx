import React, { useEffect } from 'react';

/*
 * 多个组件加载完成后都要请求学生数据
 * 使用高阶组件实现
 * */
function withStudent(Comp) {
  return class Student extends React.Component<any, any> {
    state = {
      stus: [],
    };
    componentDidMount() {
      fetch('http://localhost:8001/api/studentAll').then(res => {
        res.json().then(result => {
          this.setState({
            stus: result.datas,
          });
        });
      });
    }

    render() {
      return <Comp {...this.props} stus={this.state.stus} />;
    }
  };
}

function Item(props) {
  console.log(props);
  return (
    <ul>
      {props.stus.map(ele => (
        <li key={ele.id}>{ele.name}</li>
      ))}
    </ul>
  );
}

const WithItem = withStudent(Item);

function App(props) {
  return (
    <div>
      <WithItem />
    </div>
  );
}

export default App;
