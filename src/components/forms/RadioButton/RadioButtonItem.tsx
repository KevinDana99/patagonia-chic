import React from 'react';
import { RadioButtonItemPropsType } from './types';
import {
	StyledInput,
	ContainerInput,
	StyledLabel,
	IconDiv,
	TextDiv,
	CheckIcon,
} from './styled';
import Text from '../../texts/Text';

const RadioButtonItem = ({
	index,
	item,
	handleChange,
	checkedItem,
}: RadioButtonItemPropsType) => {
	const checkedInput = JSON.stringify(checkedItem) === JSON.stringify(item);

	return (
		<ContainerInput key={index}>
			<StyledInput
				id={index.toString().concat('radio')}
				name={item.name}
				type="radio"
				value={item.value}
				onChange={handleChange}
				checked={checkedInput}
			/>
			<StyledLabel htmlFor={index.toString().concat('radio')}>
				<IconDiv>
					<CheckIcon />
				</IconDiv>
				<TextDiv>
					<Text size={17} weight={'regular'} color={'#333'}>
						{item.label ? item.label : `Opcion ${index + 1}`}
					</Text>
				</TextDiv>
			</StyledLabel>
		</ContainerInput>
	);
};

export default RadioButtonItem;
