import React, { useEffect, useState } from 'react';
import {
	RadioButtonItemType,
	RadioButtonListPropsType,
	RestrictedRadioButtonItemType,
} from './types';
import RadioButtonItem from './RadioButtonItem';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';

const RadioButtonList = ({
	list,
	onChange,
	defaultValue,
}: RadioButtonListPropsType) => {
	const defaultItem = list.find((item) => item.value === defaultValue) ?? null;

	const [checkedItem, setCheckedItem] = useState<RadioButtonItemType | null>(
		defaultItem
	);

	const conditionedList: RestrictedRadioButtonItemType[] = list.map(
		({ label, value, name }, index) => ({
			label,
			value: value ?? label,
			name: name ?? `item${index}`,
		})
	);

	useEffect(() => onChange && onChange(checkedItem), [checkedItem, onChange]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		selectedItem: RadioButtonItemType
	) => {
		setCheckedItem(selectedItem);
	};

	return (
		<>
			{conditionedList.map((item, index) => {
				return (
					<RadioButtonItem
						key={`key-${index}`}
						index={index}
						item={item}
						handleChange={(e) => handleChange(e, item)}
						checkedItem={checkedItem}
					/>
				);
			})}
		</>
	);
};

export default withFontStyles(RadioButtonList);
