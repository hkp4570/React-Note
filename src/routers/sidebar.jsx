import React from 'react';
import {BrowserRouter as Routes, Switch, Route, Link} from "react-router-dom";

const routes = [
    {
        path:'/',
        exact: true,
        sidebar: () => <div>home</div>,
        main: () => <div>home-main</div>
    },
    {
        path:'/user',
        sidebar: () => <div>user</div>,
        main: () => <div>user-main</div>
    },
    {
        path:'/about',
        sidebar: () => <div>about</div>,
        main: () => <div>about-main</div>
    },
]

// 用于渲染两个区域，主区域和侧边栏
function Sidebar() {
    return (
        <Routes>
            <div style={{ display: 'flex' }}>
                <div style={{marginRight: 200}}>
                    <ul>
                        <li><Link to={'/'}>home</Link></li>
                        <li><Link to={'/user'}>user</Link></li>
                        <li><Link to={'/about'}>about</Link></li>
                    </ul>

                    <Switch>
                        {
                            routes.map((route,index) => (
                                <Route key={index} path={route.path} exact={route.exact} children={<route.sidebar />} />
                            ))
                        }
                    </Switch>
                </div>

                <Switch>
                    {
                        routes.map((route,index) => (
                            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                        ))
                    }
                </Switch>
            </div>
        </Routes>
    );
}

export default Sidebar;