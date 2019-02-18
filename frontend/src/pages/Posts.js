import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { MainLayout } from '../components/Layout';

const GET_POSTS = gql`
	{
		allPosts {
			id
			title
			slug
		}
	}
`;

class Posts extends Component {
	render() {
		return (
			<Query query={GET_POSTS}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					return (
						<MainLayout>
							{data.allPosts.map(post => (
								<div key={post.id}>
									<h1>
										<Link to={`/blog/post/${post.slug}`}>
											{post.title}
										</Link>
									</h1>
								</div>
							))}
						</MainLayout>
					);
				}}
			</Query>
		);
	}
}

export default Posts;
