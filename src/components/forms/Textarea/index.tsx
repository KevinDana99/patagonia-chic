import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import Text from '../../texts/Text';
import { StyledTextarea, StyledLabel, TextareaContainer } from './styled';
import { TextareaPropsType } from './types';

const Textarea = ({
	label,
	onChange,
	name,
	defaultValue,
	error,
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
				error={!!error}
			/>
			<StyledLabel>
				<Text color="#777" size={15} weight={'regular'}>
					{label}
				</Text>
			</StyledLabel>
		</TextareaContainer>
	);
};

export default Textarea;
