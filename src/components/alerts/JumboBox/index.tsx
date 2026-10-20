import React from 'react';
import { Container } from './styled';
import { JumboBoxType } from './types';

const JumboBox = ({ background, children, className }: JumboBoxType) => {
	return (
		<Container className={className} background={background}>
			{children}
		</Container>
	);
};

export default JumboBox;
