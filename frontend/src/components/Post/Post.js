import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Row, Col, Icon, Avatar } from 'antd';
import styled from 'styled-components';
import { Author, Date, Image, Title } from './components';

const Wrapper = styled.div``;

class Post extends Component {
	render() {
		const { post } = this.props;
		return (
			<div>
				<Image image={post.image} tag="Python" slug={post.slug} />
				<Title title={post.title} slug={post.slug}></Title>
				<Row type="flex" justify="start">
					<Col>
						<Author>
							<Avatar
								src="https://i.pravatar.cc/32								"
								style={{ marginRight: 5, marginBottom: 5 }}
							/>
							{post.author.firstName} {post.author.lastName}
						</Author>
					</Col>
					<Col style={{ marginLeft: 8, marginTop: 2 }}>
						<Date>
							<Icon type="clock-circle" style={{ marginRight: 5 }} />
							{format(post.publishedOn, 'MMM DD, YYYY')}
						</Date>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Post;
