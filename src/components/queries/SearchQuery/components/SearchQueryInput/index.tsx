import React, { useState } from 'react';
import { Container, Label, TextInput, CloseIcon } from './styled';
import { SearchQueryInputPropsType } from './types';

const SearchQueryInput = ({
	label,
	placeholder,
	inputTextValue = '',
	onInputTextChange,
	onClearFieldClicked,
}: SearchQueryInputPropsType) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleClearClicked = () => {
		onClearFieldClicked?.();
		onInputTextChange?.('');
	};

	return (
		<Container
			isFocused={isFocused || isHovered}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Label>{label}</Label>
			<TextInput
				placeholder={placeholder}
				onChange={(e) => onInputTextChange?.(e.target.value)}
				value={inputTextValue}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{inputTextValue.length > 0 && (isFocused || isHovered) && (
				<CloseIcon onClick={handleClearClicked} />
			)}
		</Container>
	);
};

export default SearchQueryInput;
