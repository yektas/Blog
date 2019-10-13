import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Col } from 'antd';
import Post from './Post';
import { BlogItem } from '../common/Skeletons';

const GET_POSTS = gql`
	{
		allPosts {
			id
			title
			image
			slug
			publishedOn
			thumbnailUrl
			category {
				name
			}
			author {
				firstName
				lastName
			}
		}
	}
`;

class Posts extends Component {
	render() {
		return (
			<Query query={GET_POSTS}>
				{({ loading, error, data }) => {
					let skeletons = [];
					for (var i = 0; i < 3; i++) {
						skeletons.push(
							<Col xm={24} sm={24} md={12} lg={12} xl={8}>
								<BlogItem />
							</Col>
						);
					}
					if (loading) return skeletons;
					if (error) return <div>Error</div>;
					return data.allPosts.map((post) => (
						<Col xm={24} sm={24} md={12} lg={12} xl={8}>
							<Post post={post} />
						</Col>
					));
				}}
			</Query>
		);
	}
}

export default Posts;
