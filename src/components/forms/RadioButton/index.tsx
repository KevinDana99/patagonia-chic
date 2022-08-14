import React, { FC, useState } from 'react';
import {
	RadioButtonItemType,
	RadioButtonListPropsType,
	RestrictedRadioButtonItemType,
} from './types';
import RadioButtonItem from './RadioButtonItem';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';

const RadioButtonList: FC<RadioButtonListPropsType> = ({
	list,
	onChange,
	defaultValue,
}) => {
	// esta bien?
	const [checkedItem, setCheckedItem] = useState<
		RadioButtonItemType | undefined
	>(defaultValue);

	// condition list items
	const conditionedList: RestrictedRadioButtonItemType[] = list.map(
		({ label, value, name }, index) => ({
			label,
			value: value ?? label,
			name: name ?? `item${index}`,
		})
	);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		itemName: string
	) => {
		let newCheckedItem = checkedItem;
		const isChecked = e.target.checked;
		const currentItem = conditionedList.find((item) => item.name === itemName);
		if (currentItem && isChecked) {
			newCheckedItem = currentItem;
		}
		setCheckedItem(newCheckedItem);
		onChange && onChange(newCheckedItem);
	};

	return (
		<>
			{conditionedList.map((item, index) => {
				return (
					<RadioButtonItem
						key={`key-${index}`}
						index={index}
						name={item.name}
						value={item.value}
						label={item.label}
						handleChange={(e) => handleChange(e, item.name)}
						checkedItem={checkedItem}
					/>
				);
			})}
		</>
	);
};

/* return (
	<ContainerInput key={index}>
		<StyledInput
			id={index.toString().concat('radio')}
			name={item.name}
			type="radio"
			value={item.value}
			onChange={e => handleChange(e, item.name)}
			checked={state === item.name ? true : false}
		/>
		<StyledLabel htmlFor={index.toString().concat('radio')}>
			<IconDiv></IconDiv>
			<TextDiv>
				{item.label ? item.label : `Opcion ${index + 1}`}
			</TextDiv>
		</StyledLabel>
	</ContainerInput>
); */

export default withFontStyles(RadioButtonList);
