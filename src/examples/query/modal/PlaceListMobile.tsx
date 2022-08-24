import React from 'react';
import { PlaceList } from './PlaceList';
import { MobileInput, MobileLabel } from './styled';
import { PlaceListMobileType } from './types';
import ListModal from './Modal';

const PlaceListMobile = ({
	places,
	setPlaceData,
	values,
	inputOnChange,
	placeholder,
	openCalendar,
	closeList,
}: PlaceListMobileType) => {
	return <ListModal closeModal={closeList}></ListModal>;
};

export default PlaceListMobile;
