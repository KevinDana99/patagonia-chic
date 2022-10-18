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
	className,
	inputProps,
	disabled,
}: InputPropsType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e.target.value);
	};

	return (
		<DataInputContainer className={className}>
			<DataInput
				{...inputProps}
				placeholder=" "
				onChange={handleChange}
				name={name}
				value={defaultValue}
				error={!!error}
				disabled={disabled}
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
