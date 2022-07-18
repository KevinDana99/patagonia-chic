import React from 'react';
import {
	CloseIcon,
	Label,
	OptionContainer,
	OptionContent,
	Title,
} from './styled';

export const OptionItem = ({
	label,
	title,
	onClick,
	value,
	clearData,
	isSelected,
}) => (
	<OptionContainer onClick={onClick} isSelected={isSelected}>
		<OptionContent>
			<Label>{label}</Label>
			<Title>{value ? value : title}</Title>
		</OptionContent>
		{value && <CloseIcon onClick={clearData} />}
	</OptionContainer>
);
