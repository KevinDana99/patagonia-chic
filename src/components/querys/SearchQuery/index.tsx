import React, { useState } from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import { CalendarInput } from './CalendarInput';
import {
	ButtonContainer,
	CalendarContainer,
	Divider,
	SearchQueryContainer,
	SearchQueryOptions,
} from './styled';
import { SearchQueryType, StateSearchQueryType } from './types';
import { IoSearch } from 'react-icons/io5';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Calendar } from './Calendar';
import { PlaceList } from './PlaceList';
import { getViewport } from './viewport.map';
import Modal from '../../../examples/query/modal';
import PlaceListMobile from './PlaceListMobile/PlaceListMobile';
import { PlaceListInput } from './PlaceListInput';

export const SearchQuery = ({ places, onQuerySubmit }: SearchQueryType) => {
	const [data, setData] = useState<StateSearchQueryType>({
		place: null,
		startDate: null,
		endDate: null,
	});
	const [query, setQuery] = useState('');
	const [placeList, setPlaceList] = useState(places);
	const [modal, setModal] = useState(false);
	const [showPlaceList, setShowPlaceList] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [calendarFocusedInput, setCalendarFocusedInput] = useState('startDate');
	const viewport = window.visualViewport.width;
	const dispositive = getViewport(viewport);

	console.log('view', showPlaceList);

	const clearDates = () => {
		setData({ ...data, startDate: null, endDate: null });
		setShowCalendar(true);
		setCalendarFocusedInput('startDate');
	};

	const openCloseModal = () => {
		setModal(!modal);
	};

	const filterPlaceList = (query: string) => {
		// eslint-disable-next-line security/detect-non-literal-regexp
		const placeFilter = new RegExp(query, 'i');
		const matchPlaces = places.filter(
			(place) =>
				placeFilter.test(place.name) || placeFilter.test(place.province)
		);
		setPlaceList(matchPlaces);
	};

	return (
		<SearchQueryContainer>
			<SearchQueryOptions dispositive={dispositive}>
				<PlaceListInput
					label={'Lugar'}
					placeholder={'¿A dónde vas?'}
					onClick={() => {
						setShowPlaceList(true);
						openCloseModal();
						setCalendarFocusedInput('startDate');
					}}
					value={data?.place?.name}
					clearData={() => {
						setData({ ...data, place: { name: '' } });
						setShowPlaceList(true);
						setShowCalendar(false);
						setPlaceList(places);
					}}
					isSelected={showPlaceList}
					inputOnChange={(e) => {
						const placeName = e.target.value;
						setData({
							...data,
							place: {
								name: placeName,
							},
						});
						filterPlaceList(placeName);
					}}
					outsideClick={() => setShowPlaceList(false)}
				>
					<PlaceList
						places={placeList}
						setPlaceData={setData}
						openCalendar={() =>
							setShowCalendar(!data.startDate || !data.endDate)
						}
						closeList={() => setShowPlaceList(false)}
						values={data}
						placeFilter={data.place?.name}
						showList={showPlaceList}
					/>
				</PlaceListInput>

				{dispositive == 'DESKTOP' && (
					<>
						<CalendarInput
							labels={['Fecha partida', 'Fechar llegada']}
							titles={['Seleccione fecha', 'Seleccione fecha']}
							values={data}
							clearData={clearDates}
							onClick={() => {
								setShowCalendar(true);
								setCalendarFocusedInput('startDate');
								setData({ ...data, startDate: null, endDate: null });
							}}
							outsideClick={() => setShowCalendar(false)}
							calendarFocusedInput={calendarFocusedInput}
							showCalendar={showCalendar}
						>
							{showCalendar && (
								<CalendarContainer onClick={(e) => e.stopPropagation()}>
									<Calendar
										dispositive={dispositive}
										setDates={setData}
										values={data}
										setFocused={setCalendarFocusedInput}
										focused={calendarFocusedInput}
										closeCalendar={() => setShowCalendar(false)}
									/>
								</CalendarContainer>
							)}
						</CalendarInput>
					</>
				)}
				<Divider />
				<ButtonContainer dispositive={dispositive}>
					<PrimaryButton
						title={dispositive == 'DESKTOP' ? 'Buscar Excursiones' : ''}
						IconComponent={IoSearch}
						onClick={() => onQuerySubmit(data)}
					/>
				</ButtonContainer>
			</SearchQueryOptions>

			{dispositive != 'DESKTOP' && modal && (
				<Modal
					Children={() => (
						<PlaceListMobile
							query={query}
							setQuery={setQuery}
							filterPlaceList={filterPlaceList}
							openCloseModal={openCloseModal}
							showPlaceList={showPlaceList}
							showCalendar={showCalendar}
							places={placeList}
							setPlaceData={setData}
							setShowCalendar={setShowCalendar}
							setShowPlaceList={setShowPlaceList}
							openCalendar={() =>
								setShowCalendar(!data.startDate || !data.endDate)
							}
							closeList={() => setShowPlaceList(false)}
							data={data}
							setCalendarData={setData}
							dispositive={dispositive}
							values={data}
							setFocused={setCalendarFocusedInput}
							focused={calendarFocusedInput}
							closeCalendar={() => setShowCalendar(false)}
						/>
					)}
				/>
			)}
		</SearchQueryContainer>
	);
};
