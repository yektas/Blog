import React from 'react';
import { Layout, Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Header } from '../Header';

const Desktop = ({ children }) => {
	const isDesktop = useMediaQuery({ minWidth: 992 });
	return isDesktop ? children : null;
};

const Default = ({ children }) => {
	const isNotMobile = useMediaQuery({ minWidth: 768 });
	return isNotMobile ? children : null;
};

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
	return isTablet ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 767 });
	return isMobile ? children : null;
};

export default function PostLayout({ children }) {
	return (
		<Row>
			<Default>
				<Col span={12} offset={6}>
					{children}
				</Col>
			</Default>
			<Mobile>
				<Col span={24}>{children}</Col>
			</Mobile>
		</Row>
	);
}
