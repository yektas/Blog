import React from 'react';
import { SecondaryText } from '../../common/SecondaryText';

function Date({ children }) {
	return <SecondaryText bold>{children}</SecondaryText>;
}

export { Date };
