import React, { Component } from 'react';
import { Layout, Menu} from "antd";
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import svgLogo from "../../assets/sy-logo.svg";
import logoImg from "../../assets/Logo2-png.png";
import logoDeneme from "../../assets/LOGO-deneme.png";
import logo2New from "../../assets/Logo2-newcolor.png";
const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
   background: #141e43
   display: flex;
   width: 100%;
   align-items: center
   flex-direction: column
`

const LogoWrapper = styled.div`
	flex: 2
`

const CustomMenu = styled(Menu)`
	background: #141e43
`

const CustomMenuItem = styled(Menu.Item)`
	font-size: 16px
	font-weight: 500
	flex: 1

`

class Header extends Component {
    state = {
    };


    render() {
        return (
			<CustomHeader>
				<LogoWrapper>
					<img className="logo" style={{ width: 150, height: 150}} src={logo2New} alt="test"/>
				</LogoWrapper>
				<CustomMenu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
				>	
					<CustomMenuItem key="2">HOME</CustomMenuItem>
					<CustomMenuItem key="3">BLOG</CustomMenuItem>
					<CustomMenuItem key="4">CATEGORIES</CustomMenuItem>
					<CustomMenuItem key="5">ABOUT</CustomMenuItem>
					<CustomMenuItem key="6">CONTACT ME</CustomMenuItem>
				</CustomMenu>
			</CustomHeader>
        );
    }
}

export default Header;