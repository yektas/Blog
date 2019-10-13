import React, { Component } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const Image = styled.div`
	min-height: 300px;
	max-height: calc(80vh - 126px);
	width: 400px;
    height: 150px;
    padding: 10px;
	float: left;
	background: url("${(props) => props.image}");
	background-size: cover;
	position: relative;
`;

const Text = styled(Title)`
	position: absolute;
	bottom: 10px;
	left: 10px;
	background: rgba(0, 0, 0, 0.75);
	padding: 4px 8px;
	color: white !important;
	margin: 0;
`;

class PostCard extends Component {
	render() {
		const { post } = this.props;
		return (
			<Image image={post.image}>
				<Text level={3}>Javascript</Text>
			</Image>
		);
	}
}

export default PostCard;
