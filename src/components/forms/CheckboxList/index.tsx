import React, { FC } from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import CheckboxItem from './CheckboxItem';
import {
	CheckboxListItemType,
	CheckboxListPropsType,
	RestrictedCheckboxListItemType,
} from './types';

const CheckboxList: FC<CheckboxListPropsType> = ({
	list,
	defaultValue = [],
	onChange,
}) => {
	const [checkedList, setCheckedList] =
		React.useState<CheckboxListItemType[]>(defaultValue);

	// condition list items
	const conditionedList: RestrictedCheckboxListItemType[] = list.map(
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
		let newList = checkedList;
		const isChecked = e.target.checked;
		const currentItem = conditionedList.find((item) => item.name === itemName);

		if (
			currentItem &&
			isChecked &&
			checkedList.findIndex((item) => item.name === itemName) === -1
		) {
			newList = [...checkedList, currentItem];
		} else {
			newList = checkedList.filter((item) => item.name !== itemName);
		}

		setCheckedList(newList);
		onChange && onChange(newList);
	};

	return (
		<>
			{conditionedList.map((item, index) => {
				return (
					<CheckboxItem
						key={`key-${index}`}
						index={index}
						name={item.name}
						value={item.value}
						label={item.label}
						handleChange={(e) => handleChange(e, item.name)}
					/>
				);
			})}
		</>
	);
};

export default withFontStyles(CheckboxList);
