import React from 'react';
import Text from '../../../../texts/Text';
import {
	Container,
	AvailableElement,
	UnavailableElement,
	AvailabilityReferenceContainer,
} from './styled';
import {
	DateAvailabilityPropsType,
	AvailabilityReferencePropsType,
} from './types';

const DateAvailability = ({
	isAvailable = false,
}: DateAvailabilityPropsType) => {
	return isAvailable ? (
		<AvailableElement />
	) : (
		<Container>
			<UnavailableElement />
		</Container>
	);
};

export const AvailabilityReference = ({
	text,
}: AvailabilityReferencePropsType) => {
	if (!text) return <></>;
	return (
		<AvailabilityReferenceContainer>
			<AvailableElement style={{ margin: 0 }} />
			<Text style={{ marginLeft: 7 }} size={12} weight="medium">
				{text}
			</Text>
		</AvailabilityReferenceContainer>
	);
};

export default DateAvailability;
