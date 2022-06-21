import React, { FC } from 'react';
import { CheckboxItemPropsType } from './types';
import {
	StyledInput,
	ContainerInput,
	StyledLabel,
	IconDiv,
	TextDiv,
} from './styled';

const CheckboxItem: FC<CheckboxItemPropsType> = ({
	index,
	name,
	value,
	title,
	handleChange,
}) => (
	<ContainerInput>
		<StyledInput
			id={index.toString().concat('checkbox')}
			name={name}
			type="checkbox"
			value={value}
			onChange={handleChange}
		/>

		<StyledLabel htmlFor={index.toString().concat('checkbox')}>
			<IconDiv></IconDiv>

			<TextDiv>{title}</TextDiv>
		</StyledLabel>
	</ContainerInput>
);

export default CheckboxItem;
