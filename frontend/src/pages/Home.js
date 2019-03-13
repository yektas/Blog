import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { MainLayout, HomeLayout } from '../components/Layout';
import PostCard from "../components/common/PostCard";
import Carousel from '../components/Carousel/Carousel';
import SectionTitle from '../components/common/SectionTitle';

const GET_POSTS = gql`
	{
		allPosts {
			id
			title
			slug
		}
	}
`;

class Home extends Component {
	render() {
		return (
			<Query query={GET_POSTS}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					return (
						<HomeLayout>
							<Carousel />
							<SectionTitle style={{ marginTop: 50, marginBottom: 25 }} />
							<PostCard image="https://via.placeholder.com/600x400" />
							{data.allPosts.map(post => (
								<div key={post.id}>
									<h1>
										<Link to={`/blog/post/${post.slug}`}>
											{post.title}
										</Link>
									</h1>
								</div>
							))}
						</HomeLayout>
					);
				}}
			</Query>
		);
	}
}

export default Home;
