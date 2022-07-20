import React, { useState } from 'react';
import PrimaryButton from '../../buttons/PrimaryButton';
import { OptionItem } from './OptionItem';
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

export const SearchQuery = ({ places, onQuerySubmit }: SearchQueryType) => {
	const [data, setData] = useState<StateSearchQueryType>({
		place: null,
		startDate: null,
		endDate: null,
	});
	const [modal, setModal] = useState(false);
	const [showPlaceList, setShowPlaceList] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [calendarFocusedInput, setCalendarFocusedInput] = useState('startDate');
	const [viewport, setViewport] = useState(window.visualViewport.width);
	const dispositive = getViewport(viewport);

	const clearDates = () => {
		setData({ ...data, startDate: null, endDate: null });
		setShowCalendar(true);
		setCalendarFocusedInput('startDate');
	};

	const openCloseModal = () => {
		setModal(!modal);
	};

	const filterPlaceList = (query: string) => {
		const matchQuery = places.filter(
			(e) => e.name.match(query) || e.province.match(query)
		);
	};

	return (
		<SearchQueryContainer>
			<SearchQueryOptions dispositive={dispositive}>
				<OptionItem
					label={'Lugar'}
					title={'¿A dónde vas?'}
					onClick={() => {
						dispositive == 'DESKTOP'
							? setShowPlaceList(true)
							: setShowPlaceList(true);
						openCloseModal();
						setData({ ...data, startDate: null, endDate: null });
						setCalendarFocusedInput('startDate');
					}}
					value={data.place?.name}
					clearData={() => {
						setData({ ...data, place: null });
						setShowPlaceList(true);
						setShowCalendar(false);
					}}
					isSelected={showPlaceList}
				/>

				{dispositive == 'DESKTOP' && (
					<>
						<Divider />
						<OptionItem
							label={'Fecha partida'}
							title={'Seleccione fecha'}
							value={data.startDate?.name}
							isSelected={showCalendar && calendarFocusedInput === 'startDate'}
							clearData={clearDates}
						/>

						<Divider />
						<OptionItem
							label={'Fechar llegada'}
							title={'Seleccione fecha'}
							value={data.endDate?.name}
							isSelected={showCalendar && calendarFocusedInput === 'endDate'}
							clearData={clearDates}
						/>
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
			{dispositive == 'DESKTOP' && showPlaceList && (
				<PlaceList
					places={places}
					setPlaceData={setData}
					openCalendar={() => setShowCalendar(!data.startDate || !data.endDate)}
					closeList={() => setShowPlaceList(false)}
					values={data}
				/>
			)}

			{dispositive != 'DESKTOP' && modal && (
				<Modal
					Children={() => (
						<PlaceListMobile
							filterPlaceList={filterPlaceList}
							openCloseModal={openCloseModal}
							showPlaceList={showPlaceList}
							showCalendar={showCalendar}
							places={places}
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

			{dispositive == 'DESKTOP' && (
				<CalendarContainer>
					{showCalendar && (
						<Calendar
							dispositive={dispositive}
							setDates={setData}
							values={data}
							setFocused={setCalendarFocusedInput}
							focused={calendarFocusedInput}
							closeCalendar={() => setShowCalendar(false)}
						/>
					)}
				</CalendarContainer>
			)}
		</SearchQueryContainer>
	);
};
