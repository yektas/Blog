import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';

const Wrapper = styled.div`
	position: relative;
	z-index: 2;
	border-radius: 12px;
	overflow: hidden;
	-webkit-box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.2),
		0 22px 27px -20px rgba(7, 10, 25, 0.42);
	box-shadow: 0 3px 12px -1px rgba(7, 10, 25, 0.2),
		0 22px 27px -20px rgba(7, 10, 25, 0.42);
	margin-bottom: 23px;
`;

const ImageWrapper = styled.a`
	min-height: 250px;
	display: block;
	position: relative;
	overflow: hidden;

	:hover {
		opacity: 0.75;
	}
`;

const ImageHolder = styled.span`
    background-image: url("${(props) => props.image}");
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100% !important;
    z-index: 1;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
`;

function Image(props) {
	const { image, tag, slug } = props;
	return (
		<Wrapper>
			{slug ? (
				<Link to={`/blog/post/${slug}`}>
					<ImageWrapper>
						<ImageHolder image={image} />
						<Tag tag={tag} />
					</ImageWrapper>
				</Link>
			) : (
				<ImageWrapper>
					<ImageHolder image={image} />
					<Tag tag={tag} />
				</ImageWrapper>
			)}
		</Wrapper>
	);
}

export { Image };
