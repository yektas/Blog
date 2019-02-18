import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';
import { EditorHeader } from '../Header/EditorHeader';

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
				<EditorHeader/>
				<Content
					style={{
						padding: '0 50px',
						minHeight: 1080
					}}>
					<Row style={{ marginBottom: 50 }}>
						<Col
							style={{ height: 500, textAlign: 'center' }}
							span={5}>
							{this.props.leftColumn}
						</Col>
						<Col span={14}>{this.props.children}</Col>
						<Col
							style={{ height: 500, textAlign: 'center' }}
							span={5}>
							{this.props.rightColumn}
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
