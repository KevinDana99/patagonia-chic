import React, { useEffect, useRef, useState } from 'react';
import { CloseIcon, Divider, Input, Label, OptionContent } from '../../styled';
import { PlaceListInputType } from '../../types';
import { PlaceList } from './PlaceList';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import useToggle from '../../../../../hooks/useToggle';
import { OptionContainerPlaceList } from './styled';
import PlaceListMobile from '../../mobile/wrappers/PlaceListMobile';
import Modal from '../../../../modals/Modal';
import SearchList from '../../../../lists/SearchList';

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
	closeModal,
	modal,
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
			<Modal visible={showPlaceList && isMobile && modal ? true : false}>
				<SearchList
					list={placeList}
					search={true}
					title={'Excursiones'}
					engine={'fuse'}
				/>
			</Modal>

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
