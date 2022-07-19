import React, { useEffect, useRef } from 'react';
import { InputMobile } from './styled';
import { PlaceList } from '../PlaceList';
import { CalendarContainer } from '../styled';
import { Calendar } from '../Calendar';

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
}) => {
	const inputReference = useRef();

	useEffect(() => {
		inputReference.current && inputReference.current.focus();
	});

	return (
		<>
			<h5>Lugar</h5>
			<InputMobile
				type="text"
				placeholder="¿A donde vas?"
				ref={inputReference}
			/>

			{showPlaceList && (
				<PlaceList
					dispositive={dispositive}
					places={places}
					setPlaceData={setPlaceData}
					openCalendar={() => setShowCalendar(!data.startDate || !data.endDate)}
					closeList={() => setShowPlaceList(false)}
					values={data}
				/>
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
							setShowCalendar(false);
							openCloseModal();
						}}
					/>
				</CalendarContainer>
			)}
		</>
	);
};

export default PlaceListMobile;
