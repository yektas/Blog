import React, { Component } from 'react';
import { Card as AntCard, Typography } from 'antd';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SecondaryText } from '../common';

const { Title } = Typography;

const CardHeader = styled.div`
    min-height: 300px;
    max-height: calc(80vh - 126px);
    background-size: cover;
    background-position: 48% 42% !important;
    border-radius: 8px;
	width: 100%;
	background-attachment: fixed;
	background:
    	url("${(props) => props.image}");

    :before {
        content: '';
        display: block;
        position: absolute;
        min-height: 300px;
        max-height: calc(80vh - 126px);
        width: 100%;

    }
`;

const Card = styled(AntCard)`
	background: transparent;
`;

const CardHeaderWrapper = styled.div`
	border-radius: 8px;
`;

const ContentWrapper = styled.div`
	padding: 14px 0px 0px 0px;
	background: transparent;
`;

const CardHeaderCategory = styled.h4`
	color: #fff !important;
	position: absolute;
	top: 15px;
	left: 20px;
	text-transform: uppercase;
	font-weight: bold;
	z-index: 999;

	:before {
		background: inherit;
		background-attachment: fixed;
		-webkit-filter: blur(12px);
		filter: blur(12px);
		transform: scale(2) translateY(20px);
	}
`;

class PopularPostCard extends Component {
	render() {
		const { post } = this.props;
		return (
			<Card
				bordered={false}
				bodyStyle={{ padding: 0 }}
				style={{ marginRight: 20 }}
				cover={
					<CardHeaderWrapper>
						<CardHeaderCategory>{post.category.name}</CardHeaderCategory>
						<CardHeader image={post.image} />
					</CardHeaderWrapper>
				}
			>
				<ContentWrapper>
					<Title level={3}>
						<Link to={`/blog/post/${post.slug}`}>{post.title}</Link>
					</Title>
					<SecondaryText>
						{format(post.publishedOn, 'MMM DD, YYYY')}
					</SecondaryText>
				</ContentWrapper>
			</Card>
		);
	}
}

export default PopularPostCard;
