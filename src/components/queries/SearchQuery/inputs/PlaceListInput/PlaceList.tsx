/* eslint-disable react/jsx-key */
import React from 'react';
import { PlaceListContainer } from './styled';
import { PlaceListType } from '../../types';
const PlaceList = ({ children }: PlaceListType) => {
	return <PlaceListContainer>{children}</PlaceListContainer>;
};

export default PlaceList;
