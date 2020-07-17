import React, { useContext } from 'react';

const ctx = React.createContext();

// function Test() {
//   return(
//     <div>
//       <ctx.Consumer>
//         {value => <h1>{value}</h1>}
//       </ctx.Consumer>
//     </div>
//   )
// }
function Test() {
  const value = useContext(ctx);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <ctx.Provider value={'abc'}>
        <Test />
      </ctx.Provider>
    </div>
  );
}

export default App;
