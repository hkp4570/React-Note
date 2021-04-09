import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    generatePath,
} from 'react-router-dom';


function App(props) {
    return (
        <Router basename={'/zh'}>
            <ul>
                <li>
                    <Link to='/home'>home</Link>
                </li>
                <li>
                    <Link to='/about/posts'>about</Link>
                </li>
                <li>
                    <Link to='/dashboard'>dashboard</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/home'>
                    <Home/>
                </Route>
                <Route exact path={generatePath('/about/:entity(posts|common)',{
                    entity:'posts'
                })}>
                    <About/>
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}


function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export default App;