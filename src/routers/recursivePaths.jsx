import React from 'react';
import {BrowserRouter as Routes, Switch, Route, Link, Redirect, useRouteMatch, useParams} from "react-router-dom";

// 递归的路径
function RecursivePaths() {
    return (
        <Routes>
            <Switch>
                <Route path={'/:id'}>
                    <Person/>
                </Route>
                <Route path={'/'}>
                    <Redirect to={'/0'}/>
                </Route>
            </Switch>
        </Routes>
    );
}

function Person() {
    const {url} = useRouteMatch();
    const {id} = useParams();
    const person = findFriend(parseInt(id));
    return (
        <div>
            <h1>{person.name}"s friends</h1>
            <ul>
                {
                    person.friends.map(id => (
                        <li key={id}>
                            <Link to={`${url}/${id}`}>{findFriend(id).name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route path={`${url}/:id`}>
                    <Person/>
                </Route>
            </Switch>
        </div>
    )
}

const data = [
    {id: 0, name: 'dog', friends: [1, 2, 3]},
    {id: 1, name: 'cat', friends: [0, 3]},
    {id: 2, name: 'pig', friends: [2, 3]},
    {id: 3, name: 'monkey', friends: [1, 3]}
]

const findFriend = (id) => {
    return data.find(e => e.id === id);
}

export default RecursivePaths;