// 你可能需要针对不同路由输出不同的全局 layout，umi 不支持这样的配置，
// 但你仍可以在 layouts/index.js 对 location.path 做区分，渲染不同的 layout

import styles from './index.css';

function BasicLayout(props) {
  if(props.location.pathname === '/login'){
    return (
      <div>
        <h1>登录页面的layout</h1>
        {props.children}
      </div>
    )
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to react components</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
