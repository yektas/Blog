import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from "antd";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
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
		const popularPosts = [
			{title: "Three responses to a piece of design", category: "JAVASCRIPT", image: "https://bit.ly/2Y4yoNg"},
			{title: "An Ongoing Machine Ethnography", category: "PYTHON", image: "https://bit.ly/2Y4yoNg"},
			{excerpt: "This is the description of that post. It might be long", title: "Why Choose Thype for your blog website?", category: "JAVA", image: "https://bit.ly/2Y4yoNg"}
		]
		return (
			<Query query={GET_POSTS}>
				{({ loading, error, data }) => {
					if (loading) return <div>Fetching</div>;
					if (error) return <div>Error</div>;

					return (
						<HomeLayout>
							<Carousel />
							<Row style={{ marginTop: 20 }}>
								<SectionTitle style={{ marginTop: 50, marginBottom: 25 }}>
									Popular Posts
								</SectionTitle>
								<Fade bottom cascade>
									<div>
										{popularPosts.map(post => (
											<Col span={8}>
												<PostCard post={post} />
											</Col>
										
										))}
									</div>
								</Fade>
							</Row>
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
