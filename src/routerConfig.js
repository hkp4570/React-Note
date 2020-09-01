import React from 'react';
import Counter from './Counter';
import { routerRedux, BrowserRouter, NavLink, Route, Switch } from 'dva/router';

//routerRedux: 里面包含了所有connected-react-router的东西
function Home () {
  return <div>
    首页
  </div>
}

function RouterConfig ({ history }) {
  return (
    <routerRedux.ConnectedRouter history={history}>
      <div>
        <ul>
          <li><NavLink to='/'>首页</NavLink></li>
          <li><NavLink to='/counter'>计数器</NavLink></li>
        </ul>
        <div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/counter' component={Counter} />
          </Switch>
        </div>
      </div>
    </routerRedux.ConnectedRouter>
  )
}

export default RouterConfig
