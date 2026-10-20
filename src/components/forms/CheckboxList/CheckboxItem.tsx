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
import Text from '../../texts/Text';

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
				<CheckIcon name="check" color="#fff" size={11.5} />
			</IconDiv>
			<TextDiv>
				<Text size={17} weight={'regular'} color={'#333'}>
					{label}
				</Text>
			</TextDiv>
		</StyledLabel>
	</ContainerInput>
);

export default CheckboxItem;
