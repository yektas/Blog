/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Header } from '../Header';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
	/* padding: 10px; */
	background: var(--background);
	color: var(--text-color);
`;

class HomeLayout extends React.Component {
	render() {
		const { showHeader } = this.props;
		return (
			<CustomLayout>
				{showHeader && <Header />}
				<Content
					style={{
						padding: '0 25px',
						minHeight: 800
					}}
				>
					<Row style={{ marginTop: 20 }}>
						<Col span={24}>{this.props.children}</Col>
					</Row>
				</Content>
				<Footer style={{ background: 'var(--background)' }}>
					Made with ❤️ by Sercan ©2019{' '}
				</Footer>
			</CustomLayout>
		);
	}
}
HomeLayout.defaultProps = {
	showHeader: true
};

HomeLayout.propTypes = {
	showHeader: PropTypes.bool
};

export { HomeLayout };
