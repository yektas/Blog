import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'antd';
import { HomeLayout } from '../components/Layout';
import PopularPostCard from '../components/Post/PopularPostCard';
import { SectionTitle } from '../components/common';
import Posts from '../components/Post/Posts';

class Home extends Component {
	render() {
		return (
			<HomeLayout>
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={24}>
						<SectionTitle style={{ marginTop: 50, marginBottom: 25 }}>
							Popular Posts
						</SectionTitle>
						<Posts />
					</Col>
				</Row>
			</HomeLayout>
		);
	}
}

export default Home;
