import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';

import { Header } from '../Header';

const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
	padding: 10px;
	background: var(--background);
	color: var(--text-color);
`;

class EditorLayout extends Component {
	render() {
		return (
			<CustomLayout>
				<Header />
				<Content
					style={{
						padding: '0 50px',
						marginTop: 110,
						minHeight: 1080
					}}>
					<Row style={{ marginTop: 50, marginBottom: 50 }}>
						<Col
							style={{ height: 500, textAlign: 'center' }}
							span={6}>
							Left Empty Area
						</Col>
						<Col span={12}>{this.props.children}</Col>
						<Col
							style={{ height: 500, textAlign: 'center' }}
							span={6}>
							Right Empty Area
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

export { EditorLayout };
