import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Dropdown } from 'antd';

import PropTypes from 'prop-types';

const menu = (
    <Menu style={{ minWidth: 120}}>
      <Menu.Item key="0">
        <Link to="/blog/new-post">New post</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">Your posts</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="http://www.taobao.com/">View profile</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3"><span style={{ color: "#e94828"}}>Logout</span></Menu.Item>
    </Menu>
  );


const UserMenu  = (props) => (
    <Dropdown overlay={menu} trigger={['click']}>
      <Avatar style={{ backgroundColor: '#e94828' }} icon="user" />
    </Dropdown>
    );


export default UserMenu;

UserMenu.propTypes = {
    onChange: PropTypes.func,
    theme: PropTypes.string
};