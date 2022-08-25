import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, Divider, Input, Label, OptionContent } from '../../styled';
import { PlaceListInputType } from '../../types';
import { PlaceList } from './PlaceList';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import useToggle from '../../../../../hooks/useToggle';
import { OptionContainerPlaceList } from './styled';

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
	setDisableSearch,
}: PlaceListInputType) => {
	const containerRef = useRef(null);

	const { onToggle, offToggle, toggle } = useToggle(null);

	useOutsideClick(containerRef, outsideClick);

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
				<Label>{label}</Label>
				<Input
					disableSearch={disableSearch}
					type="text"
					placeholder={placeholder}
					onChange={inputOnChange}
					value={values?.place?.name}
				/>
			</OptionContent>
			{values?.place?.name && toggle && <CloseIcon onClick={clearData} />}
			{!isMobile && showPlaceList && (
				<PlaceList
					places={placeList}
					setPlaceData={setPlaceData}
					openCalendar={openCalendar}
					closeList={closeList}
				/>
			)}

			<Divider />
		</OptionContainerPlaceList>
	);
};
