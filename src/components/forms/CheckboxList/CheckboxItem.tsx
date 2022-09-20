import React from 'react';
import { CheckboxItemPropsType } from './types';
import {
	StyledInput,
	ContainerInput,
	StyledLabel,
	IconDiv,
	TextDiv,
	CheckIcon,
} from './styled';

const CheckboxItem = ({
	index,
	name,
	value,
	label,
	handleChange,
}: CheckboxItemPropsType) => (
	<ContainerInput>
		<StyledInput
			id={index.toString().concat('checkbox')}
			name={name}
			type="checkbox"
			value={value}
			onChange={handleChange}
		/>

		<StyledLabel htmlFor={index.toString().concat('checkbox')}>
			<IconDiv>
				<CheckIcon />
			</IconDiv>
			<TextDiv>{label}</TextDiv>
		</StyledLabel>
	</ContainerInput>
);

export default CheckboxItem;
