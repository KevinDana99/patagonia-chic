import React, { useRef } from 'react';
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

	useOutsideClick(containerRef, outsideClick);

	return (
		<OptionContainer
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
			{values?.place?.name && <CloseIcon onClick={clearData} />}
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
