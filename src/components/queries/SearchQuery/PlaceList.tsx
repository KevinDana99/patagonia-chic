/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from 'react';
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
	placeFilter,
	texts,
}: PlaceListType) => {
	const [showCurrentPosition, setShowCurrentPosition] =
		useState<boolean>(false);
	const [cursorPosition, setCursorPosition] = useState<number>(0);

	const setCurrentPlace = useCallback(
		(position: number) => {
			setPlaceData({
				...values,
				place: places.at(position),
			});
		},
		[places, setPlaceData, values]
	);

	const keyHandler = useCallback(
		({ key }: { key: string }) => {
			setCursorPosition((prevState) => {
				const cursorIncrease =
					prevState < places.length - 1 ? prevState + 1 : 0;

				const cursorDecrease =
					prevState > 0 ? prevState - 1 : places.length - 1;

				switch (true) {
					case key === 'Enter':
						closeList();
						openCalendar();
						break;

					case key === 'ArrowDown' && !showCurrentPosition:
						!showCurrentPosition && setShowCurrentPosition(true);
						setCurrentPlace(0);
						return 0;

					case key === 'ArrowDown' && showCurrentPosition:
						setCurrentPlace(cursorIncrease);
						return cursorIncrease;

					case key === 'ArrowUp' && !showCurrentPosition:
						!showCurrentPosition && setShowCurrentPosition(true);
						setCurrentPlace(places.length - 1);
						return places.length - 1;

					case key === 'ArrowUp' && showCurrentPosition:
						setCurrentPlace(cursorDecrease);
						return cursorDecrease;
				}
				return prevState;
			});
		},
		[
			closeList,
			openCalendar,
			places.length,
			setCurrentPlace,
			showCurrentPosition,
		]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyHandler);
		return () => {
			document.removeEventListener('keydown', keyHandler);
		};
	}, [keyHandler]);

	return (
		<PlaceListContainer>
			{places.map((place: IPlace, index: React.Key) => (
				<PlaceContainer
					key={index}
					onClick={(e: { stopPropagation: () => void }) => {
						e.stopPropagation();
						setPlaceData({ ...values, place: place });
						closeList();
						openCalendar();
					}}
					selected={showCurrentPosition && index === cursorPosition}
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
						{texts.placeListEmptyList}
						<PlaceFilter>{`"${placeFilter}"`}</PlaceFilter>
					</EmptyMessage>
				</EmptyListContainer>
			)}
		</PlaceListContainer>
	);
};
