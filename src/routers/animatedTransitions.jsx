import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, useParams, useLocation} from "react-router-dom";
import './index.css';

function AnimatedTransitions() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Redirect to={'/red'}/>
                </Route>
                <Route path={'*'}>
                    <AnimatedApp/>
                </Route>
            </Switch>
        </Router>
    );
}

function AnimatedApp() {
    const location = useLocation();
    return (
        <div>
            <div style={{width: 600, display: 'flex', justifyContent: 'space-around'}}>
                <NavLink to={'/red'}>red</NavLink>
                <NavLink to={'/green'}>green</NavLink>
                <NavLink to={'/blue'}>blue</NavLink>
                <NavLink to={'/pink'}>pink</NavLink>
            </div>

            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={500}
                >
                    <Switch location={location}>
                        <Route path={'/:c'}>
                            <Colour/>
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

function Colour() {
    console.log('aaa')
    const {c} = useParams();
    return (
        <div
            style={{
                height: 200,
                background: `${c}`
            }}
        >
            colour:{c}
        </div>
    )
}


export default AnimatedTransitions;