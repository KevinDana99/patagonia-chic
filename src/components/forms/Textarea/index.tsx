import React, { FC } from 'react';
import { StyledTextarea, StyledLabel, TextareaContainer } from './styled';
import { TextareaPropsType } from './types';

const Textarea: FC<TextareaPropsType> = ({
	label,
	onChange,
	name,
	defaulValue,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange && onChange(e.target.value);
	};
	return (
		<TextareaContainer>
			<StyledTextarea
				placeholder=" "
				onChange={handleChange}
				name={name}
				value={defaulValue}
			></StyledTextarea>
			<StyledLabel>{label}</StyledLabel>
		</TextareaContainer>
	);
};

export default Textarea;
