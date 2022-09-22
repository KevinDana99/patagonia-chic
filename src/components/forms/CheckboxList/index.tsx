import React, { useEffect } from 'react';
import CheckboxItem from './CheckboxItem';
import {
	CheckboxListItemType,
	CheckboxListPropsType,
	RestrictedCheckboxListItemType,
} from './types';

const CheckboxList = ({
	list,
	defaultValue = [],
	onChange,
}: CheckboxListPropsType) => {
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

	useEffect(() => {
		onChange && onChange(checkedList);
	}, [checkedList, onChange]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const isChecked = e.target.checked;
		const currentItem = conditionedList[index as number];

		isChecked
			? setCheckedList([...checkedList, currentItem])
			: setCheckedList(() => {
					return checkedList.length !== 1
						? checkedList.filter((item) => item.value !== currentItem.value)
						: [];
			  });
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
						handleChange={(e) => handleChange(e, index)}
					/>
				);
			})}
		</>
	);
};

export default CheckboxList;
