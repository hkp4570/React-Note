// 你可能需要针对不同路由输出不同的全局 layout，umi 不支持这样的配置，
// 但你仍可以在 layouts/index.js 对 location.path 做区分，渲染不同的 layout
import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { NavLink } from "umi"
import styles from "./index.css"
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default (props, { location,routes }) => {
  if (props.location.pathname === "/login") {
    //登录页
    return props.children;
  }
  else {
    return (
      <Layout>
        <Header>
          <Row className={styles.header} type='flex' justify='space-between'>
            <Col>
              <NavLink to='/'>React</NavLink>
            </Col>
            <Col>欢迎你</Col>
          </Row>
        </Header>
        <Layout className={styles.main}>
          <Sider>
            <Menu theme='light' mode='inline'>
              <SubMenu title='React'>
                <Menu.Item>
                  <NavLink to='/study/useState'>useState</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/study/useEffect'>useEffect</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/study/PureComponent'>pureComponent</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/study/hoc'>hoc</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='demo'>
                <Menu.Item>
                  <NavLink to='/demo/DemoHook'>DemoHook</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/demo/renderProps'>renderProps</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu title='Context'>
                <Menu.Item>
                  <NavLink to='/Context/Context'>Context</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>{props.children}</Content>
        </Layout>
        <Footer className={styles.footer}>版权</Footer>
      </Layout>
    )
  }
}

