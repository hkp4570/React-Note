/*
 * 多个组件加载完成后都要请求学生数据
 * 使用renderProps
 * */
class AllStudent extends React.Component<any, any> {
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
    if (typeof this.props.render === 'function') {
      return this.props.render(this.state.stus);
    } else {
      return null;
    }
  }
}

function Item(props) {
  return (
    <ul>
      {props.stus.map(ele => (
        <li key={ele.id}>{ele.name}</li>
      ))}
    </ul>
  );
}

function App(props) {
  return (
    <div>
      <AllStudent render={stus => <Item stus={stus} />} />
    </div>
  );
}

export default App;
