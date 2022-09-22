import React from 'react';
import { PlaceList } from './PlaceList';
import { MobileInput, MobileLabel } from './styled';
import { PlaceListMobileType } from './types';
import ListModal from './ListModal';

const PlaceListMobile = ({
	places,
	setPlaceData,
	values,
	inputOnChange,
	placeholder,
	openCalendar,
	closeList,
	texts,
}: PlaceListMobileType) => {
	return (
		<ListModal closeModal={closeList}>
			<MobileLabel>{texts.placeListInputLabel}</MobileLabel>
			<MobileInput
				type="text"
				placeholder={placeholder}
				onChange={inputOnChange}
				value={values?.place?.name}
			/>
			<PlaceList
				places={places}
				setPlaceData={setPlaceData}
				openCalendar={openCalendar}
				closeList={closeList}
				texts={texts}
			/>
		</ListModal>
	);
};

export default PlaceListMobile;
