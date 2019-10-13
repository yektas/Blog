import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomMenu = styled(Menu)`
	background: ${(props) =>
		props.mode === 'horizontal' ? 'var(--background)' : 'null'};
	border-bottom: 0;
	font-family: 'Montserrat', sans-serif;
	transition: none;
	font-weight: 500;
`;

const CustomMenuItem = styled(Menu.Item)`
	color: ${(props) =>
		props.mode === 'horizontal' ? 'var(--text-color)' : 'null'};
	font-size: 16px;
	flex: 1;
`;

class LeftMenu extends Component {
	render() {
		const { mode } = this.props;
		return (
			<CustomMenu mode={mode} triggerSubMenuAction="click">
				<CustomMenuItem>
					<Link to="/" />
					HOME
				</CustomMenuItem>
				<CustomMenuItem>
					<Link to="/blog" />
					BLOG
				</CustomMenuItem>
				<CustomMenuItem>
					<Link to="/about" />
					ABOUT
				</CustomMenuItem>
				<CustomMenuItem>
					<Link to="/portfolio" />
					PORTFOLIO
				</CustomMenuItem>
			</CustomMenu>
		);
	}
}

export default LeftMenu;
