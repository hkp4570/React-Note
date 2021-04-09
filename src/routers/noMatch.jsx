import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

function noMatch() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/will_redirect'>will redirect</Link>
                </li>
                <li>
                    <Link to='/old_redirect'>old redirect</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/will_redirect'>
                    <WillRedirect />   
                </Route>
                <Route exact path='/old_redirect'>
                    <Redirect to='/will_redirect'/>
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

function Home(){
    return (
        <h1>home</h1>
    )
}
function WillRedirect(){
    return (
        <h1>WillRedirect</h1>
    )
}
function NoMatch(){
    return (
        <h1>404</h1>
    )
}

export default noMatch;