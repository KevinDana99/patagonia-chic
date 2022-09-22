import React from 'react';
import Text from '../../texts/Text';
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
			<StyledLabel>
				<Text size={15} weight={'regular'} color={'#777'}>
					{label}
				</Text>
			</StyledLabel>
		</DataInputContainer>
	);
};

export default Input;
