import React, { FC } from 'react';
import {
	StyledInput,
	ContainerInput,
	StyledLabel,
	IconDiv,
	TextDiv,
} from './styled';
import { CheckboxListItemType, CheckboxPropsType } from './types';

const Checkbox: FC<CheckboxPropsType> = ({ list, onChange }) => {
	return (
		<>
			{list.length &&
				list.map((obj: CheckboxListItemType, index) => {
					return (
						<ContainerInput key={index}>
							<StyledInput
								id={index.toString().concat('checkbox')}
								name={obj.name}
								type="checkbox"
								value={obj.value}
								onChange={onChange}
							/>

							<StyledLabel htmlFor={index.toString().concat('checkbox')}>
								<IconDiv></IconDiv>

								<TextDiv>
									{obj.title ? obj.title : `Opcion ${index + 1}`}
								</TextDiv>
							</StyledLabel>
						</ContainerInput>
					);
				})}
		</>
	);
};

export default Checkbox;
