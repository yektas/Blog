import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Dropdown, Button, Icon, Switch } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import OutlineButton from '../common/OutlineButton';
import userStore from '../../store/UserStore';
import lastLogo from '../../assets/lastLogo.png';
import AuthModal from '../Auth/AuthModal';
import { changeTheme } from '../../utils/Utils';
import './header.css';

const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
    background: var(--background);
    margin-top: 15px;
`;

const Logo = styled.img`width: 160px;`;

const CustomMenu = styled(Menu)`
    background: var(--background);
    margin-top: 10px;
    border-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    transition: none;
	font-weight: 500
`;

const CustomMenuItem = styled(Menu.Item)`
	color: var(--text-color);
	border-radius: 8px
	font-size: 16px
    flex: 1


    :hover {
        border-color: var(--background) !important;
    }
`;
const menu = (
    <Menu>
        <Menu.Item key='1'>
            <Icon type='user' />
            1st menu item
        </Menu.Item>
        <Menu.Item key='2'>
            <Icon type='user' />
            2nd menu item
        </Menu.Item>
        <Menu.Item key='3'>
            <Icon type='user' />
            3rd item
        </Menu.Item>
    </Menu>
);

class HeaderClass extends Component {
    constructor() {
        super();
        
        const userTheme = localStorage.getItem("userTheme");
        this.state = {
            theme: userTheme != null ? userTheme : 'dark',
            showAuthModal: false
        };
        const theme = this.state.theme;
        changeTheme(theme, true);
        this.toggleTheme.bind(this);
    }

    showAuthModal = () => {
        this.setState({ showAuthModal: true });
    };

    closeAuthModal = () => {
        this.setState({ showAuthModal: false });
    };

    toggleTheme () {
        const theme = this.state.theme;
        changeTheme(theme, false)
        this.setState({ theme: theme === 'dark' ? 'light' : 'dark'})
        
    }

    render() {
        let user = userStore.user;
        return (
                <CustomHeader>
                    <Row>
                        <Col span={4}>
                            <Logo src={lastLogo} alt='test' />
                        </Col>
                        <Col span={12}>
                            <CustomMenu mode='horizontal'>
                                <CustomMenuItem>
                                    <Link to='/' />
                                    HOME
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    <Link to='/blog/new-post' />
                                    NEW POST
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    <Link to='/blog' />
                                    BLOG
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    <Link to='/about' />
                                    ABOUT
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    <Link to='/portfolio' />
                                    PORTFOLIO
                                </CustomMenuItem>
                            </CustomMenu>
                        </Col>
                        <Col span={3} offset={1}>
                            {user ? (
                                <Dropdown
                                    overlay={menu}
                                    trigger={[
                                        'click'
                                    ]}
                                >
                                    <OutlineButton type='primary' style={{ marginLeft: 8 }}>
                                        Button <Icon type='down' />
                                    </OutlineButton>
                                </Dropdown>
                            ) : (
                                <div>
                                    <OutlineButton type='primary' onClick={this.showAuthModal}>
                                        Login
                                    </OutlineButton>
                                    <AuthModal visible={this.state.showAuthModal} onCancel={this.closeAuthModal} />
                                </div>
                            )}
                        </Col>
                        <Col span={2}>
                            <Switch
                                checked={this.state.theme === 'dark'}
                                onChange={() => this.toggleTheme()}
                                checkedChildren='Dark'
                                unCheckedChildren='Light'
                            />
                        </Col>
                    </Row>
                </CustomHeader>
        );
    }
}

const HeaderV2 = withRouter(HeaderClass);

export { HeaderV2 };
