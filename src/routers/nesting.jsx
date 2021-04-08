import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';


// 嵌套路由
function App(props) {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/home'>home</Link>
        </li>
        <li>
          <Link to='/topics'>topics</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/home'><Home /></Route>
        <Route path='/topics'><Topics /></Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      home
    </div>
  );
}

function Topics() {
    const {path, url} = useRouteMatch();
  return (
    <Router>
     <h2>topics</h2>
        <ul>
            <li>
                <Link to={`${url}/topicOne`}>topicOne</Link>
            </li>
            <li>
                <Link to={`${url}/topicTwo`}>topicTwo</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path={path}>
                place select topic
            </Route>
            <Route exact path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
    </Router>
  );
}

function Topic() {
    const {topicId} = useParams();
  return (
    <div>
     topicID:{topicId}
    </div>
  );
}

export default App;