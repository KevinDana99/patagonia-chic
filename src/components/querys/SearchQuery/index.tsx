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

export const SearchQuery = ({ places, onQuerySubmit }: SearchQueryType) => {
	const [data, setData] = useState<StateSearchQueryType>({
		place: null,
		startDate: null,
		endDate: null,
	});

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

	return (
		<SearchQueryContainer>
			<SearchQueryOptions>
				<OptionItem
					label={'Lugar'}
					title={'¿A dónde vas?'}
					onClick={() => setShowPlaceList(true)}
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
					</>
				)}

				{dispositive == 'DESKTOP' && (
					<>
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
			{showPlaceList && (
				<PlaceList
					places={places}
					setPlaceData={setData}
					openCalendar={() => setShowCalendar(!data.startDate || !data.endDate)}
					closeList={() => setShowPlaceList(false)}
					values={data}
				/>
			)}
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
		</SearchQueryContainer>
	);
};
