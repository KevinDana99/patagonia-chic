import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import SectionItem from './SectionItem';
import { Container } from './styled';

const Included = () => {
	return (
		<Container>
			<SectionItem />
		</Container>
	);
};

const IncludedItems = withFontStyles(Included);

export default IncludedItems;
