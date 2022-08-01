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
}: PlaceListMobileType) => {
	return (
		<ListModal closeModal={closeList}>
			<MobileLabel>{'Lugar'}</MobileLabel>
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
			/>
		</ListModal>
	);
};

export default PlaceListMobile;
