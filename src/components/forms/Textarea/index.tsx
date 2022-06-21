import React, { FC } from 'react';
import { StyledTextarea, StyledLabel, TextareaContainer } from './styled';
import { TextareaProps } from './types';

const Textarea: FC<TextareaProps> = ({ text, onChange, name, value }) => {
	return (
		<TextareaContainer>
			<StyledTextarea
				id="alergias_vianda-3_1"
				placeholder=" "
				onChange={onChange}
				name={name}
				value={value}
			></StyledTextarea>

			<StyledLabel htmlFor="alergias_vianda-3_1">{text}</StyledLabel>
		</TextareaContainer>
	);
};

export default Textarea;
