import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';

function customLink(props) {
    return (
        <Router>
            <ul>
                <li>
                    <CustomLink activeOnlyWhenExact={true} to='/' label='home' />
                </li>
                <li>
                <CustomLink to='/about' label='about' />
                </li>
            </ul>

            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/about'><About /></Route>
            </Switch>
        </Router>
    );
}

function CustomLink({activeOnlyWhenExact, to, label}){
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <div className={match ? 'active' : ''}>
            {match && ">"}
            <Link to={to}>{label}</Link>
        </div>
    )
}

function Home(){
    return (
        <h1>home</h1>
    )
}
function About(){
    return (
        <h1>about</h1>
    )
}

export default customLink;