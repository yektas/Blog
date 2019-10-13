import React, { Component } from 'react';
import { Menu, Icon, Dropdown, Switch } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import userStore from '../../store/UserStore';
import { OutlineButton } from '../common';
import AuthModal from '../Auth/AuthModal';

const CustomMenu = styled(Menu)`
	background: ${(props) =>
		props.mode === 'horizontal' ? 'var(--background)' : 'null'};
	border-bottom: 0;
	font-family: 'Montserrat', sans-serif;
	transition: none;
	font-weight: 500;
`;

const CustomMenuItem = styled(Menu.Item)`
	color: var(--text-color);
	font-size: 16px;
	flex: 1;
`;

const menu = (
	<CustomMenu>
		<CustomMenuItem key="1">
			<Icon type="user" />
			1st menu item
		</CustomMenuItem>
		<CustomMenuItem key="2">
			<Icon type="user" />
			2nd menu item
		</CustomMenuItem>
		<CustomMenuItem key="3">
			<Icon type="user" />
			3rd item
		</CustomMenuItem>
	</CustomMenu>
);

class RightMenu extends Component {
	render() {
		let user = userStore.user;
		const {
			theme,
			mode,
			onLoginCancel,
			onLoginClick,
			authModalVisible,
			toggleTheme
		} = this.props;
		return (
			<CustomMenu mode={mode} triggerSubMenuAction="click">
				{user ? (
					<CustomMenuItem>
						<Dropdown overlay={menu} trigger={['click']}>
							<OutlineButton type="primary" style={{ marginLeft: 8 }}>
								Button <Icon type="down" />
							</OutlineButton>
						</Dropdown>
					</CustomMenuItem>
				) : (
					<CustomMenuItem>
						<Link to="#" />
						<OutlineButton type="primary" onClick={onLoginClick}>
							Login
						</OutlineButton>
						<AuthModal visible={authModalVisible} onCancel={onLoginCancel} />
					</CustomMenuItem>
				)}
				<CustomMenuItem>
					<Switch
						checked={theme === 'dark'}
						onChange={() => toggleTheme()}
						checkedChildren="Dark"
						unCheckedChildren="Light"
					/>
				</CustomMenuItem>
			</CustomMenu>
		);
	}
}

export default RightMenu;
