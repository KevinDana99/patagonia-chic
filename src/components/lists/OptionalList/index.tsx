import React, { useEffect, useState } from 'react';
import OptionalListItem from './OptionalListItem';
import {
	OptionalItemListState,
	OptionalItemState,
} from './OptionalListItem/types';
import { OptionalsListType } from './types';

const OptionalList = ({
	list,
	optionalType,
	onSelectedChange,
	texts,
}: OptionalsListType) => {
	const [listItems, setListItems] = useState<OptionalItemListState>([]);

	useEffect(() => {
		!listItems[0]?.resetList && onSelectedChange(listItems);
	}, [listItems, onSelectedChange]);

	const removeItem = (item: OptionalItemState) => {
		setListItems(
			listItems.filter(
				(listItem) => item.id !== listItem.id && !listItem.resetList
			)
		);
	};

	const addItem = (item: OptionalItemState) => {
		const itemIncluded = listItems.some((listItem) => listItem.id === item.id);

		!itemIncluded &&
			setListItems([
				...listItems.filter((listItem) => !listItem.resetList),
				item,
			]);
	};

	const resetList = (item: OptionalItemState) => {
		setListItems([item]);
	};

	return (
		<>
			{list.map((option, key) => (
				<OptionalListItem
					key={key}
					addItem={option.resetList ? resetList : addItem}
					removeItem={removeItem}
					texts={texts}
					selectedItem={listItems.some((item) => item.id === option.id)}
					{...option}
				/>
			))}
		</>
	);
};

export default OptionalList;
