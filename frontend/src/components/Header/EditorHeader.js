import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ChangeThemeSwitch from '../common/ChangeThemeSwitch';
import themes from '../../themes';
import UserMenu from '../Menu/UserMenu';
const { Header: AntHeader } = Layout;

const CustomHeader = styled(AntHeader)`
	background: var(--background);
`;

class EditorHeaderClass extends Component {
	constructor() {
		super();
		this.state = {
			theme: localStorage.getItem('userTheme'),
			showAuthModal: false
		};
        this.setThemeColors.bind(this);
		this.changeTheme.bind(this);
    }

    setThemeColors(theme){
        const root = document.getElementById('root');
		if (theme === 'light') {
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
    }

    changeTheme = () =>  {
		if (this.state.theme === 'dark') {
			this.setThemeColors("light");
			this.setState({ theme: 'light' });
			localStorage.setItem('userTheme', 'light');
		} else {
            this.setThemeColors("dark");
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
		//let user = userStore.user;
		return (
			<CustomHeader>
				<Row>
                    <Col span={2}>
                        <ChangeThemeSwitch onChange={this.changeTheme}
                            theme={this.state.theme}
                        />
                    </Col>
                    <Col span={2} offset={15}>
                        <UserMenu />
                    </Col>
					<Col span={2}>

					</Col>
				</Row>
			</CustomHeader>
		);
	}
}

const EditorHeader = withRouter(EditorHeaderClass);

export { EditorHeader };
