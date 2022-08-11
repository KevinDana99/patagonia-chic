import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { StyledTextarea, StyledLabel, TextareaContainer } from './styled';
import { TextareaPropsType } from './types';

const Textarea = ({
	label,
	onChange,
	name,
	defaultValue,
}: TextareaPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange && onChange(e.target.value);
	};
	return (
		<TextareaContainer>
			<StyledTextarea
				placeholder=" "
				onChange={handleChange}
				name={name}
				value={defaultValue}
			></StyledTextarea>
			<StyledLabel>{label}</StyledLabel>
		</TextareaContainer>
	);
};

export default withFontStyles(Textarea);
