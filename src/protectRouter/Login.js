import React from 'react';
import loginInfo from './loginInfo';

export default function Login({ history, location }) {
  return (
    <div>
      登录页面
      <button onClick={() => {
        loginInfo.login();
        if (loginInfo.isLogin && location.state) {
          history.push(location.state);
        } else {
          history.push('/');
        }
      }}>点击登录</button>
    </div>
  );
}