import React, { useEffect, useRef, useState } from 'react';
import {
	CloseIcon,
	Input,
	Label,
	OptionContainer,
	OptionContent,
} from './styled';
import { PlaceListInputType } from './types';
import PlaceListMobile from './PlaceListMobile';
import { PlaceList } from './PlaceList';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import useToggle from '../../../hooks/useToggle';

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
		<OptionContainer
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
			{isSelected && isMobile && (
				<PlaceListMobile
					places={placeList}
					inputOnChange={inputOnChange}
					setPlaceData={setPlaceData}
					placeholder={placeholder}
					values={values}
					openCalendar={openCalendar}
					closeList={closeList}
				/>
			)}
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
			{showPlaceList && (
				<PlaceList
					places={placeList}
					setPlaceData={setPlaceData}
					openCalendar={openCalendar}
					closeList={closeList}
				/>
			)}
		</OptionContainer>
	);
};
