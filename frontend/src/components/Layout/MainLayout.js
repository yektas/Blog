import React from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Header, HeaderV2 } from '../Header';

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
				{showHeader && <HeaderV2 />}
				<Content
					style={{
						padding: '0 50px',
						marginTop: 50,
						minHeight: 1080
					}}>
					<Row style={{ marginTop: 50 }}>
						<Col span={14} offset={5}>
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
