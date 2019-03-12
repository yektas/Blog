import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Slider from "react-slick";
import AOS from "aos";
import { Link } from 'react-router-dom';
import { MainLayout, HomeLayout } from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import PostCard from '../components/common/PostCard';

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
	constructor(props){
		super(props);
		AOS.init();
	}
	render() {
		return (
			<Query query={GET_POSTS}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					return (
						<HomeLayout>
							<Carousel />
							<PostCard />
							{data.allPosts.map(post => (
								<div data-aos="fade-in" key={post.id}>
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

export default Posts;
