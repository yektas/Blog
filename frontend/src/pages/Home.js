import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from "antd";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { MainLayout, HomeLayout } from '../components/Layout';
import PostCard from "../components/Post/PostCard";
import AboutMeCard from "../components/common/AboutMeCard"
import CategoryMenu from "../components/Menu/CategoryMenu"
import Carousel from '../components/Carousel/Carousel';
import SectionTitle from '../components/common/SectionTitle';
import RegularPostCard from '../components/Post/RegularPostCard';

const GET_POSTS = gql`
	{
		allPosts {
			id
			title
			slug
			content
		}
	}
`;

class Home extends Component {

	render() {
		const popularPosts = [
			{metaData: { date: "May 12, 2019", commentCount: 1, views: 992 }, title: "Three responses to a piece of design", category: "JAVASCRIPT", image: "https://bit.ly/2Y4yoNg"},
			{metaData: { date: "December 7, 2018", commentCount: 10, views: 1250 }, title: "An Ongoing Machine Ethnography", category: "PYTHON", image: "https://bit.ly/2Y4yoNg"},
			{metaData: { date: "January 7, 2018", commentCount: 8, views: 592 }, excerpt: "This is the description of that post. It might be long", title: "Why Choose Thype for your blog website?", category: "JAVA", image: "https://bit.ly/2Y4yoNg"}
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
								<div>
									{popularPosts.map(post => (
										<Col span={8}>
											<PostCard post={post} />
										</Col>
									))}
								</div>
							</Row>
							<Row style={{ marginTop: 20 }}>
								<Col span={17}>
									{data.allPosts.map(post => (
										<Col span={12}>
												<RegularPostCard post={post} />
										</Col>
								))}
								</Col>
							</Row>
						</HomeLayout>
					);
				}}
			</Query>
		);
	}
}

export default Home;
