import React from 'react';
import { Layout, } from 'antd';
import {NavLink} from 'umi'
import './index.less'
const { Header} = Layout;

const App: React.FC = (props) => {
  const {children} = props
  return (
    <Layout className='page-root'>
      <Header className="header">
        <div className="logo" />
        <div className='link-group'>
          <NavLink to="/main/privilege" className="menu-nav-link">权限控制</NavLink>
          <NavLink to="/main/editor" className="menu-nav-link">页面配置</NavLink>
        </div>
      </Header>
      <Layout className="page-container">
        {children}
      </Layout>
    </Layout>
  );
};

export default App;
