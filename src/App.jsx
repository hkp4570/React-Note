import React,{useReducer} from 'react';
import Pagination from './components/Pagination/Pagination';

function reducer (state,action) {

}
function App() {
  const [data,setData] = useReducer(reducer,[],(args) => {
    for (let i = 0; i < 100; i++) {
      args.push(i + 1);
    }
    return args;
  });
  const paginationRender = (data) => {
    return (
      <ul>
      {data.map(ele => (
        <li key={ele}>{ele}</li>
      ))}
    </ul>
    )
  }
  
  return (
    <div>
      <Pagination data={data} render={paginationRender} initial={10} pageMax={10} />
    </div>
  );
}

export default App;
