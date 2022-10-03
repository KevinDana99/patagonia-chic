import React, { useEffect, useRef } from 'react';
import { CloseIcon, Divider, Input, Label, OptionContent } from '../../styled';
import { PlaceListInputType } from '../../types';
import PlaceList from './PlaceList';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import useToggle from '../../../../../hooks/useToggle';
import { OptionContainerPlaceList } from './styled';
import SearchList from '../../../../lists/SearchList';
import Text from '../../../../texts/Text';

export const PlaceListInput = ({
	label,
	placeholder,
	onClick,
	values,
	clearData,
	isSelected,
	inputOnChange,
	outsideClick,
	placeList,
	setPlaceData,
	isMobile,
	openCalendar,
	closeList,
	showPlaceList,
	disableSearch,
	showCalendar,
}: PlaceListInputType) => {
	const containerRef = useRef(null);
	useOutsideClick(containerRef, outsideClick);

	const { onToggle, offToggle, toggle } = useToggle(null);

	useEffect(() => {
		offToggle();
	}, [values]);

	return (
		<OptionContainerPlaceList
			onMouseOver={() => {
				values.place?.name && onToggle();
			}}
			onMouseOut={() => {
				values.place?.name && offToggle();
			}}
			onClick={onClick}
			isSelected={isSelected}
			ref={containerRef}
		>
			<OptionContent>
				<Label>
					<Text size={12} weight={'semi-bold'}>
						{label}
					</Text>
				</Label>
				<Input
					disableSearch={disableSearch}
					type="text"
					placeholder={placeholder}
					onChange={inputOnChange}
					value={values?.place?.name}
				/>
			</OptionContent>
			{values?.place?.name && toggle && <CloseIcon onClick={clearData} />}
			{!isMobile && showPlaceList && !showCalendar && (
				<PlaceList>
					<SearchList
						list={placeList}
						onChangeSelect={setPlaceData}
						selectedAction={(item) => {
							setPlaceData({ ...values, place: item });
							closeList();
							openCalendar();
						}}
					/>
				</PlaceList>
			)}

			<Divider />
		</OptionContainerPlaceList>
	);
};
