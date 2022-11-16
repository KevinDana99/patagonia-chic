import React, { ForwardedRef, useEffect, useState } from 'react';
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
		onlyClick = true,
		onClick,
		isError = false,
		isFocused: isFocusedProp = false,
	}: SearchQueryInputPropsType,
	ref: ForwardedRef<HTMLInputElement>
) => {
	const [isFocused, setIsFocused] = useState(isFocusedProp);

	useEffect(() => {
		setIsFocused(isFocusedProp);
	}, [isFocusedProp]);

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
			ref={onlyClick ? ref : undefined}
			isFocused={isFocused}
			onlyClick={onlyClick}
			onClick={onClick}
		>
			<Label>{label}</Label>
			<TextInput
				ref={!onlyClick ? ref : undefined}
				placeholder={placeholder}
				onChange={(e) => onInputTextChange?.(e.target.value)}
				value={inputTextValue}
				onFocus={() => handleFocusChange(true)}
				onBlur={() => handleFocusChange(false)}
				onlyClick={onlyClick}
				isError={isError}
			/>
			{inputTextValue.length > 0 && <CloseIcon onClick={handleClearClicked} />}
		</Container>
	);
};

export default React.forwardRef<HTMLInputElement, SearchQueryInputPropsType>(
	SearchQueryInput
);
