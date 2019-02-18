import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Dropdown, Button, Icon, Switch } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import userStore from '../../store/UserStore';
import lastLogo from '../../assets/lastLogo.png';
import themes from '../../themes';
import AuthModal from '../Auth/AuthModal';
const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
	background: var(--background);
`;

const Logo = styled.img`
	width: 200px;
`;

const CustomMenu = styled(Menu)`
	margin-top: 20px
	background: var(--background);
	font-family: 'Montserrat', sans-serif;
	font-weight: 500
`;

const CustomMenuItem = styled(Menu.Item)`
	color: var(--text-color);
	border-radius: 8px
	font-size: 16px
	flex: 1
`;
const menu = (
	<Menu>
		<Menu.Item key="1">
			<Icon type="user" />
			1st menu item
		</Menu.Item>
		<Menu.Item key="2">
			<Icon type="user" />
			2nd menu item
		</Menu.Item>
		<Menu.Item key="3">
			<Icon type="user" />
			3rd item
		</Menu.Item>
	</Menu>
);

class HeaderClass extends Component {
	constructor() {
		super();
		this.state = {
			theme: localStorage.getItem('userTheme'),
			showAuthModal: false
		};
		const root = document.getElementById('root');
		if (this.state.theme === 'light') {
			root.style.setProperty('--background', themes.light.background);
			root.style.setProperty('--text-color', themes.light.textColor);
			root.style.setProperty(
				'--heading-color',
				themes.light.headingColor
			);
		} else {
			root.style.setProperty('--background', themes.dark.background);
			root.style.setProperty('--text-color', themes.dark.textColor);
			root.style.setProperty('--heading-color', themes.dark.headingColor);
		}

		this.changeTheme.bind(this);
	}

	changeTheme() {
		const root = document.getElementById('root');
		if (this.state.theme === 'dark') {
			root.style.setProperty('--background', themes.light.background);
			root.style.setProperty('--text-color', themes.light.textColor);
			root.style.setProperty(
				'--heading-color',
				themes.light.headingColor
			);
			this.setState({ theme: 'light' });
			localStorage.setItem('userTheme', 'light');
		} else {
			root.style.setProperty('--background', themes.dark.background);
			root.style.setProperty('--text-color', themes.dark.textColor);
			root.style.setProperty('--heading-color', themes.dark.headingColor);
			this.setState({ theme: 'dark' });
			localStorage.setItem('userTheme', 'dark');
		}
	}

	showAuthModal = () => {
		this.setState({ showAuthModal: true });
	};

	closeAuthModal = () => {
		this.setState({ showAuthModal: false });
	};

	render() {
		let user = userStore.user;
		const { location } = this.props;
		return (
			<CustomHeader>
				<Row>
					<Col span={12} offset={4}>
						<Logo src={lastLogo} alt="test" />
					</Col>
					<Col span={6}>
						{user ? (
							<Dropdown overlay={menu} trigger={['click']}>
								<Button style={{ marginLeft: 8 }}>
									Button <Icon type="down" />
								</Button>
							</Dropdown>
						) : (
							<div>
								<Button onClick={this.showAuthModal}>
									Login
								</Button>
								<AuthModal
									visible={this.state.showAuthModal}
									onCancel={this.closeAuthModal}
								/>
							</div>
						)}
					</Col>
					<Col span={2}>
						<Switch
							checked={this.state.theme === 'dark'}
							onChange={() => this.changeTheme()}
							checkedChildren="Dark"
							unCheckedChildren="Light"
						/>
					</Col>
				</Row>
				<Col style={{ textAlign: 'center' }}>
					<CustomMenu
						theme={this.state.theme}
						mode="horizontal"
						selectedKeys={[location.pathname]}>
						<CustomMenuItem key="/">
							<Link to="/" />
							HOME
						</CustomMenuItem>
						<CustomMenuItem key="/blog/new-post">
							<Link to="/blog/new-post" />
							NEW POST
						</CustomMenuItem>
						<CustomMenuItem key="/blog">
							<Link to="/blog" />
							BLOG
						</CustomMenuItem>
						<CustomMenuItem key="/about">
							<Link to="/about" />
							ABOUT
						</CustomMenuItem>
						<CustomMenuItem key="/portfolio">
							<Link to="/portfolio" />
							PORTFOLIO
						</CustomMenuItem>
					</CustomMenu>
				</Col>
			</CustomHeader>
		);
	}
}

const Header = withRouter(HeaderClass);

export { Header };
