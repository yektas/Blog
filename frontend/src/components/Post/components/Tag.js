import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.h5`
	position: absolute;
	right: 15px;
	top: 15px;
	z-index: 10;
	text-align: right;
	font-weight: bold;

	font-size: 15px;
	color: #111;
	background: #ffd012;
	display: inline-block;
	padding: 3px 15px;
	vertical-align: top;
	border-radius: 3px;
	margin-bottom: 5px;
	margin-left: 5px;
	border-radius: 25px;
`;

function Tag({ tag }) {
	return <StyledTag>{tag}</StyledTag>;
}

export { Tag };
