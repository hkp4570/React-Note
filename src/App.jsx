// import React from 'react';
// import Counter from './components/Counter/Counter';
//
// export default function () {
//   return (
//       <div>
//         <Counter />
//       </div>
//   );
// }


import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Counter from './components/Counter/Counter';

export default function () {
  return (
    <Provider store={store}>
      <Counter abc={123} />
    </Provider>
  );
}
