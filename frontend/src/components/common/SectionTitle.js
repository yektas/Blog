import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title: AntTitle } = Typography;

const Title = styled(AntTitle)`
	text-transform: uppercase;
`;

const SectionTitle = (props) => {
	return (
		<Title {...props} level={4}>
			{props.children}
		</Title>
	);
};

export { SectionTitle };
