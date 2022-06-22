import React, { FC } from 'react';
import { RadioButtonItemPropsType } from './types';
import {
	StyledInput,
	ContainerInput,
	StyledLabel,
	IconDiv,
	TextDiv,
} from './styled';

const RadioButtonItem: FC<RadioButtonItemPropsType> = ({
	index,
	name,
	value,
	label,
	handleChange,
	checkedItem,
}) => (
	<ContainerInput key={index}>
		<StyledInput
			id={index.toString().concat('radio')}
			name={name}
			type="radio"
			value={value}
			onChange={handleChange}
			checked={checkedItem?.name === name}
		/>
		<StyledLabel htmlFor={index.toString().concat('radio')}>
			<IconDiv></IconDiv>
			<TextDiv>{label ? label : `Opcion ${index + 1}`}</TextDiv>
		</StyledLabel>
	</ContainerInput>
);

export default RadioButtonItem;
