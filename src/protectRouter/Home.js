import React from 'react';
import loginInfo from './loginInfo';

export default function Home(props) {
  return (
    <div>
      首页
      <button onClick={() => {
        loginInfo.loginOut();
      }}>退出登录</button>
    </div>
  );
}