import React, { useEffect, useRef } from 'react';
import { InputMobile, SearchButton, ContainerButton } from './styled';
import { PlaceList } from '../PlaceList';
import { CalendarContainer } from '../styled';
import { Calendar } from '../Calendar';
import FooterCalendar from './FooterCalendar';
import PrimaryButton from '../../../buttons/PrimaryButton';
import { IoSearch } from 'react-icons/io5';

const PlaceListMobile = ({
	dispositive,
	places,
	setData,
	data,
	showPlaceList,
	showCalendar,
	setShowCalendar,
	setPlaceData,
	setShowPlaceList,
	openCalendar,
	closeCalendar,
	closeList,
	values,
	setFocused,
	focused,
	setCalendarData,
	openCloseModal,
	filterPlaceList,
}) => {
	const inputReference = useRef();

	useEffect(() => {
		inputReference.current && inputReference.current.focus();
	});

	return (
		<>
			{showPlaceList && (
				<>
					{!showCalendar && (
						<>
							<h5>Lugar</h5>
							<InputMobile
								type="text"
								placeholder="¿A donde vas?"
								ref={inputReference}
								onChange={(e) => filterPlaceList(e.target.value)}
							/>
						</>
					)}

					{!showCalendar && (
						<PlaceList
							dispositive={dispositive}
							places={places}
							setPlaceData={setPlaceData}
							openCalendar={() =>
								setShowCalendar(!data.startDate || !data.endDate)
							}
							closeList={() => setShowPlaceList(false)}
							values={data}
						/>
					)}
				</>
			)}

			{showCalendar && (
				<CalendarContainer dispositive={dispositive}>
					<Calendar
						dispositive={dispositive}
						setDates={setCalendarData}
						values={data}
						setFocused={setFocused}
						focused={focused}
						closeCalendar={() => {
							console.log(data);
						}}
					/>
					<FooterCalendar
						place={data.place}
						startDate={data.startDate}
						endDate={data.endDate}
					/>
					<ContainerButton>
						<SearchButton
							title="Buscar excursiones"
							IconComponent={IoSearch}
							onClick={openCloseModal}
						/>
					</ContainerButton>
				</CalendarContainer>
			)}
		</>
	);
};

export default PlaceListMobile;
