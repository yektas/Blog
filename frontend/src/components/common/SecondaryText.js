import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Text } = Typography;

const StyledText = styled(Text)`
	font-size: var(--secondary-text-size);
	color: var(--secondary-text-color);
	font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
	font-style: italic;
`;

const SecondaryText = (props) => {
	return <StyledText bold={props.bold}>{props.children}</StyledText>;
};

SecondaryText.propTypes = {
	bold: PropTypes.bool
};

export { SecondaryText };
