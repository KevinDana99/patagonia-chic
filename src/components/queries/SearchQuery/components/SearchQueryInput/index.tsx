import React, { ForwardedRef, useState } from 'react';
import { Container, Label, TextInput, CloseIcon } from './styled';
import { SearchQueryInputPropsType } from './types';

const SearchQueryInput = (
	{
		label,
		placeholder,
		inputTextValue = '',
		onInputTextChange,
		onClearFieldClicked,
		onFocusChange,
	}: SearchQueryInputPropsType,
	ref: ForwardedRef<HTMLInputElement>
) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleFocusChange = (isFocused: boolean) => {
		onFocusChange?.(isFocused);
		setIsFocused(isFocused);
	};

	const handleClearClicked = () => {
		onClearFieldClicked?.();
		onInputTextChange?.('');
		(ref as React.RefObject<HTMLInputElement>)?.current?.focus();
	};

	return (
		<Container
			isFocused={isFocused || isHovered}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Label>{label}</Label>
			<TextInput
				ref={ref}
				placeholder={placeholder}
				onChange={(e) => onInputTextChange?.(e.target.value)}
				value={inputTextValue}
				onFocus={() => handleFocusChange(true)}
				onBlur={() => handleFocusChange(false)}
			/>
			{inputTextValue.length > 0 && (isFocused || isHovered) && (
				<CloseIcon onClick={handleClearClicked} />
			)}
		</Container>
	);
};

export default React.forwardRef<HTMLInputElement, SearchQueryInputPropsType>(
	SearchQueryInput
);
