import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
import classNames from 'classnames';
import styles from './index.scss';

const { Header, Sider, Content } = Layout;
const pathReg = /^\/([\w-]+)(?:\/.*)?$/;

function Panel({ history, location, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const selectedKey = location.pathname.replace(pathReg, '$1');

  return (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className={classNames(styles.logo, { [styles.collapsed]: collapsed })}
          onClick={() => history.push('/')}
        >
          {collapsed ? 'Boilerplate' : 'Web Console Boilerplate'}
        </div>
        <Menu
          className={styles.menu}
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onSelect={({ key }) => history.push(`/${key}`)}
        >
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="profile">
            <Icon type="user" />
            <span>Profile</span>
          </Menu.Item>
          <Menu.Item key="settings">
            <Icon type="setting" />
            <span>Settings</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Icon
            className={styles.trigger}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className={styles.headerRightContainer}>
            <a className={styles.headerMenuItem} href="/" target="_blank">
              Docs
            </a>
            <div className={styles.avatarContainer}>
              <Avatar
                size={48}
                src="//www.gravatar.com/avatar/f4afab1530c2cac1268c8f1d4ffe8537?s=200&d=retro"
              />
            </div>
          </div>
        </Header>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

Panel.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

Panel.defaultProps = {
  children: undefined,
};

export default withRouter(memo(Panel));
