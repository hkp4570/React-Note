import React, {useContext, useState} from "react";
import { BrowserRouter as Router, Link, Route, Switch, useHistory, useLocation, Redirect } from "react-router-dom";

// 1. 当前是否登录，登录信息通过context放在最顶层
function Redirects_Auth(props) {
  return (
    <ProvideAuth>
        <div>
        <AuthButton />
          <Router>
            <ul>
              <li>
                <Link to="/public">public</Link>
              </li>
              <li>
                <Link to="/protected">protected</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/public">
                <Public />
              </Route>
              <PrivateRoute exact path="/protected">
                <Protected />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
    </ProvideAuth>
  );
}

const authContext = React.createContext();
function useAuth(){
    return useContext(authContext);
}
function ProvideAuth({ children }) {
  // 获取用户信息  无论是否登录  没登录就是null
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>{children}</authContext.Provider>
    )
}

const fakeAuth = {
    isLogin: false,
    signIn(cb) {
        fakeAuth.isLogin = true;
        setTimeout(cb, 100);
    },
    signOut(cb){
        fakeAuth.isLogin = false;
        setTimeout(cb, 100);
    }
}

// 获取用户信息
function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signIn = cb => {
        return fakeAuth.signIn(() => {
            setUser('user');
            cb();
        })
    }
    const signOut = cb => {
        return fakeAuth.signOut(() => {
            setUser(null);
            cb();
        })
    }

    return {
        user,
        signIn,
        signOut,
    }
}

// 受保护的路由
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({location}) => auth.user ? (children) : (
                <Redirect
                    to={{
                        pathname:'/login',
                        state:{from: location}
                    }}
                />
            )}
        />
    );
  }

function Public() {
  return <h1>public</h1>;
}

function Protected() {
  return <h1>protected</h1>;
}
function Login() {
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();
    const {from} = location.state || {from:{pathname:'/'}};
    const login = () => {
        auth.signIn(() => {
            history.replace(from);
        })
    }
  return (
    <div>
        <p>you must login go to {from.pathname}</p>
        <button onClick={login}>sign in</button>
    </div>
  );
}
// 是否成功与否展示的信息
function AuthButton() {
    const history = useHistory();
    const auth = useAuth();
  return (
      <div>
        {  auth.user ? (
              <p>
                  welcome
              <button
                onClick={() => auth.signOut(() => history.push('/'))}
              >sing out</button>
              </p>
          ) : (
              <p>you are no login</p>
          )}
      </div>
  )
}

export default Redirects_Auth;
