import React from 'react';
import { PlaceList } from '../../../inputs/PlaceListInput/PlaceList';
import { PlaceListMobileType } from '../../../types';
import { MobileLabel, MobileInput } from './styled';

const PlaceListMobile = ({
	placeholder,
	inputOnChange,
	values,
	places,
	setPlaceData,
	openCalendar,
	closeList,
}: PlaceListMobileType) => {
	return (
		<>
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
		</>
	);
};

export default PlaceListMobile;
