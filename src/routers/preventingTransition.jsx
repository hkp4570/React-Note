import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Prompt} from 'react-router-dom';

// Sometimes you want to prevent the user from
// navigating away from a page. The most common
// use case is when they have entered some data
// into a form but haven't submitted it yet, and
// you don't want them to lose it.
// 当用户输入部分表单，当离开改页面是进行提示
function preventingTransition(props) {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>from</Link>
                </li>
                <li>
                    <Link to='/one'>one</Link>
                </li>
                <li>
                    <Link to='/two'>two</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path='/' children={<BlockFrom />} />
                <Route exact path='/one' children={<h3>one</h3>} />
                <Route exact path='/two' children={<h3>two</h3>} />
            </Switch>
        </Router>
    );
}

function BlockFrom(){
    const [isBlocking, setIsBlocking] = useState(false);
    return (
        <form 
            onSubmit={e => {
                e.preventDefault();
                e.target.reset();
                setIsBlocking(false);
            }}
        >
            <Prompt
                when={isBlocking}
                message={location => (
                    `确定要离开去${location.pathname}页面吗？`
                )}
            />
            <p>
                {
                    isBlocking ? (
                        '需要确认才能离开'
                    ) : '不需要确认可以离开'
                }
            </p>
            <input type="text" onChange={e => setIsBlocking(e.target.value.length > 0)} />
            <button type='submit'>submit</button>
        </form>
    )
}

export default preventingTransition;