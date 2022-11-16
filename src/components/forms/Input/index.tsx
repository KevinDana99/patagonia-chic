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
	labelTextWeight = 'regular',
	labelTextColor = '#777',
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
				<Text weight={labelTextWeight} color={labelTextColor}>
					{label}
				</Text>
			</StyledLabel>
		</DataInputContainer>
	);
};

export default Input;
