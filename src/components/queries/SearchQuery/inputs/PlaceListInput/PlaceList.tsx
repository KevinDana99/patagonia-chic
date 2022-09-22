/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from 'react';
import { PlaceListContainer } from './styled';
import { PlaceListType, IPlace } from '../../types';
const PlaceList = ({ children }: PlaceListType) => {
	return <PlaceListContainer>{children}</PlaceListContainer>;
};

export default PlaceList;
