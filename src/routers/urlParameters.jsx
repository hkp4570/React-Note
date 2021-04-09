import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/home'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/dashboard'>dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/:id' children={<Common />} />
      </Switch>
    </Router>
  );
}


function Common() {
    const {id} = useParams();
  return (
    <div>
      ID:{id}
    </div>
  );
}

export default App;