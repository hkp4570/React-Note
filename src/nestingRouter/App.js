import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function User({ match }) {
  return(
    <div>
      <div>
        <Link to={`${match.url}/userUpdate`}>更新信息</Link>
        <Link to={`${match.url}/pay`}>支付</Link>
      </div>
      <div>
        <Route path={`${match.url}/userUpdate`} component={userUpdate} />
        <Route path={`${match.url}/pay`} component={userPay} />
      </div>
    </div>
  )
}

function userUpdate() {
  return <h1>更新信息</h1>
}
function userPay() {
  return <h1>支付</h1>
}

export default function App() {
  return (
    <div>
      <Router>
        <Route path='/user' component={User} />
      </Router>
    </div>
  );
}