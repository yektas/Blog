import React from 'react';
import { SecondaryText } from '../../common/SecondaryText';

function Author({ children }) {
	return <SecondaryText bold>{children}</SecondaryText>;
}

export { Author };
