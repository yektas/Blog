import React from 'react';
import { Layout, Menu, Col, Row, Button, Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Header } from '../Header';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
    padding: 10px
    background: var(--background);
    color: var(--text-color);
`;

class MainLayout extends React.Component {
	render() {
		const { showHeader } = this.props;
		return (
			<CustomLayout>
				{showHeader && <Header />}
				<Content
					style={{
						padding: '0 50px',
						marginTop: 110,
						minHeight: 1080
					}}>
					<Row style={{ marginTop: 50 }}>
						<Col span={12} offset={6}>
							{this.props.children}
						</Col>
					</Row>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</CustomLayout>
		);
	}
}
MainLayout.defaultProps = {
	showHeader: true
};

MainLayout.propTypes = {
	showHeader: PropTypes.bool
};

export { MainLayout };
