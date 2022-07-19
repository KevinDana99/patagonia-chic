/* eslint-disable react/jsx-key */
import React from 'react';
import {
	PlaceContainer,
	PlaceContent,
	PlaceImage,
	PlaceListContainer,
	PlaceSubtitle,
	PlaceTitle,
} from './styled';
import { PlaceListType } from './types';

export const PlaceList = ({
	places,
	setPlaceData,
	openCalendar,
	closeList,
	values,
}: PlaceListType) => (
	<PlaceListContainer>
		{places.map((place) => (
			<PlaceContainer
				onClick={() => {
					setPlaceData({ ...values, place: place });
					closeList();
					openCalendar();
				}}
			>
				<PlaceImage />
				<PlaceContent>
					<PlaceTitle>{place.name}</PlaceTitle>
					<PlaceSubtitle>
						{`${place.province} - ${place.country}`}
					</PlaceSubtitle>
				</PlaceContent>
			</PlaceContainer>
		))}
	</PlaceListContainer>
);
