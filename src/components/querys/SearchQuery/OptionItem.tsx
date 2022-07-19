import React from 'react';
import {
	CloseIcon,
	Label,
	OptionContainer,
	OptionContent,
	Title,
} from './styled';
import { OptionItemType } from './types';

export const OptionItem = ({
	label,
	title,
	onClick,
	value,
	clearData,
	isSelected,
}: OptionItemType) => (
	<OptionContainer onClick={onClick} isSelected={isSelected}>
		<OptionContent>
			<Label>{label}</Label>
			<Title>{value ? value : title}</Title>
		</OptionContent>
		{value && <CloseIcon onClick={clearData} />}
	</OptionContainer>
);
