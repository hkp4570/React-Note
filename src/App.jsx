import React,{useReducer} from 'react';
import Pagination from './components/Pagination/Pagination';

function reducer (state,action) {

}
function App() {
  const [data,setData] = useReducer(reducer,[],(args) => {
    for (let i = 0; i < 30; i++) {
      args.push(i + 1);
    }
    return args;
  });
  
  return (
    <div>
      <Pagination data={data} initial={2} pageMax={6} />
    </div>
  );
}

export default App;
