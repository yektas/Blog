import React, { Component } from 'react';
import { Layout, Col, Icon, Button, Drawer } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import lightLogo from '../../assets/logo-light.png';
import darkLogo from '../../assets/logo-dark.png';
import { changeTheme } from '../../utils/Utils';
import { device } from '../../device';
import './header.css';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};
const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};
const Default = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	return isNotMobile ? children : null;
};

class HeaderClass extends Component {
	constructor() {
		super();
		const userTheme = localStorage.getItem('userTheme');
		this.state = {
			theme: userTheme != null ? userTheme : 'light',
			authModalVisible: false,
			drawerVisible: false
		};
	}

	showAuthModal = () => {
		this.setState({ authModalVisible: true });
	};

	closeAuthModal = () => {
		this.setState({ authModalVisible: false });
	};

	componentDidMount() {
		this.setState(
			{
				theme: this.state.theme
			},
			this.setTheme(this.state.theme)
		);
	}

	setTheme = (theme) => {
		this.setState(
			{
				theme: theme
			},
			changeTheme(theme, false)
		);
	};

	toggleTheme = () => {
		const { theme } = this.state;
		if (theme === 'dark') {
			this.setTheme('light');
		} else {
			this.setTheme('dark');
		}
	};

	showDrawer = () => {
		this.setState({
			drawerVisible: true
		});
	};

	onClose = () => {
		this.setState({
			drawerVisible: false
		});
	};

	render() {
		return (
			<nav className="menu">
				<div className="menu__logo">
					<Col lg={4} md={5} sm={24} xs={24}>
						<Link to="/">
							<Logo
								src={this.state.theme === 'dark' ? lightLogo : darkLogo}
								alt="test"
							/>
						</Link>
					</Col>
				</div>

				<div className="menu__container">
					<div className="menu_left">
						<LeftMenu mode="horizontal" />
					</div>
					<div className="menu_right">
						<RightMenu
							mode="horizontal"
							theme={this.state.theme}
							onLoginClick={this.showAuthModal}
							onLoginCancel={this.closeAuthModal}
							authModalVisible={this.state.authModalVisible}
							toggleTheme={this.toggleTheme}
						/>
					</div>
					<Button className="menu__mobile-button" onClick={this.showDrawer}>
						<Icon type="menu" />
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						className="menu_drawer"
						closable={false}
						onClose={this.onClose}
						visible={this.state.drawerVisible}
					>
						<LeftMenu mode="inline" />
						<RightMenu
							mode="inline"
							theme={this.state.theme}
							onLoginClick={this.showAuthModal}
							onLoginCancel={this.closeAuthModal}
							authModalVisible={this.state.authModalVisible}
							toggleTheme={this.toggleTheme}
						/>
					</Drawer>
				</div>
			</nav>
		);
	}
}

const Logo = styled.img`
	width: 130px;

	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		width: 130px;
	}

	@media ${device.tablet} {
		max-width: 160px;
	}
`;

const Header = withRouter(HeaderClass);

export { Header };
