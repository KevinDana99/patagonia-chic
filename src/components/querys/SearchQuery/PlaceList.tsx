/* eslint-disable react/jsx-key */
import React from 'react';
import {
	EmptyListContainer,
	EmptyMessage,
	PlaceContainer,
	PlaceContent,
	PlaceFilter,
	PlaceImage,
	PlaceListContainer,
	PlaceSubtitle,
	PlaceTitle,
} from './styled';
import { PlaceListType, IPlace } from './types';

export const PlaceList = ({
	places,
	setPlaceData,
	openCalendar,
	closeList,
	values,
	dispositive,
	placeFilter,
	showList,
}: PlaceListType) =>
	showList ? (
		<PlaceListContainer dispositive={dispositive}>
			{places.map((place: IPlace, index: React.Key) => (
				<PlaceContainer
					key={index}
					onClick={(e) => {
						e.stopPropagation();
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
			{places.length === 0 && (
				<EmptyListContainer>
					<EmptyMessage>
						{'No se encontraron resultados para'}
						<PlaceFilter>{`"${placeFilter}"`}</PlaceFilter>
					</EmptyMessage>
				</EmptyListContainer>
			)}
		</PlaceListContainer>
	) : null;
