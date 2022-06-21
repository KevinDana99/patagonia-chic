import React, { FC } from 'react';
import { DataInputContainer, DataInput, StyledLabel } from './styled';
import { InputPropsType } from './types';

const Input: FC<InputPropsType> = ({ label, onChange, name, defaulValue }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e.target.value);
	};

	return (
		<DataInputContainer id="container_botas-3_1__1">
			<DataInput
				type="text"
				placeholder=" "
				onChange={handleChange}
				name={name}
				value={defaulValue}
			/>
			<StyledLabel>{label}</StyledLabel>
		</DataInputContainer>
	);
};
//saque el id --> htmlfor
export default Input;
