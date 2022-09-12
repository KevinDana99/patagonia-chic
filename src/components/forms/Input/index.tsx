import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { DataInputContainer, DataInput, StyledLabel } from './styled';
import { InputPropsType } from './types';

const Input = ({
	label,
	onChange,
	name,
	defaultValue,
	error,
}: InputPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e.target.value);
	};

	return (
		<DataInputContainer>
			<DataInput
				type="text"
				placeholder=" "
				onChange={handleChange}
				name={name}
				value={defaultValue}
				error={!!error}
			/>
			<StyledLabel>{label}</StyledLabel>
		</DataInputContainer>
	);
};

export default withFontStyles(Input);
