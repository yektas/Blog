import React from 'react';
import ContentLoader from 'react-content-loader';

const BlogItem = () => {
	return (
		<ContentLoader
			height={355}
			width={550}
			speed={3}
			primaryColor="#f3f3f3"
			secondaryColor="#ecebeb"
		>
			<rect x="3" y="3" rx="10" ry="10" width="550" height="250" />
			<rect x="3" y="270" rx="0" ry="0" width="520" height="10" />
			<rect x="3" y="295" rx="0" ry="0" width="310" height="10" />
			<circle cx="15" cy="325" r="15" />
			<rect x="40" y="320" rx="120" ry="0" width="220" height="10" />
		</ContentLoader>
	);
};

export { BlogItem };
