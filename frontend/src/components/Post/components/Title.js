import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

const { Title: AntdTitle } = Typography;

function Title({ title, slug }) {
	return (
		<AntdTitle level={3}>
			<Link to={`/blog/post/${slug}`}>{title}</Link>
		</AntdTitle>
	);
}

export { Title };
