import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

import './styles.css';
import { PrimaryCalendarType } from './types';
const PrimaryCalendar = ({
	onDaySelected,
	range = false,
	disabledDates,
}: PrimaryCalendarType) => {
	const [state, setState] = useState(new Date());

	onDaySelected && onDaySelected(state);

	return (
		<ReactCalendar
			next2Label={null}
			prev2Label={null}
			locale={'es'}
			onChange={setState}
			value={state}
			selectRange={range ? true : false}
			tileDisabled={({ date }) => {
				return disabledDates?.some(
					(disabledDate) =>
						date.getFullYear() === disabledDate.getFullYear() &&
						date.getMonth() === disabledDate.getMonth() &&
						date.getDate() === disabledDate.getDate()
				);
			}}
		/>
	);
};

export default PrimaryCalendar;
