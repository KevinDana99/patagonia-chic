import React from 'react';
import { Container } from './styled';
import { JumboBoxType } from './types';

const JumboBox = ({ background, children }: JumboBoxType) => {
	return <Container background={background}>{children}</Container>;
};

export default JumboBox;
