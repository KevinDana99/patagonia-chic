import React, { useRef } from 'react';
import { useOutsideClick } from '../useOutsideClick';
import {
	CloseIcon,
	Input,
	Label,
	OptionContainer,
	OptionContent,
} from './styled';
import { PlaceListInputType } from './types';

export const PlaceListInput = ({
	label,
	placeholder,
	onClick,
	value,
	clearData,
	isSelected,
	inputOnChange,
	children,
	outsideClick,
}: PlaceListInputType) => {

	const containerRef = useRef(null);

	useOutsideClick(containerRef, outsideClick);

	return (
		<OptionContainer
			onClick={onClick}
			isSelected={isSelected}
			ref={containerRef}
		>
			<OptionContent>
				<Label>{label}</Label>
				<Input
					type="text"
					placeholder={placeholder}
					onChange={inputOnChange}
					value={value}
				/>
			</OptionContent>
			{value && <CloseIcon onClick={clearData} />}
			{children}
		</OptionContainer>
	);
};
