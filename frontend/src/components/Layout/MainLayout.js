import React from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../Header';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
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
						marginTop: 50,
						minHeight: 1080
					}}
				>
					<Row style={{ marginTop: 50 }}>
						<Col span={24}>{this.props.children}</Col>
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
