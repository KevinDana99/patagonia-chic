import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';

import './styles.css';
import { PrimaryCalendarType } from './types';
const PrimaryCalendar = ({
	onDaySelected,
	range = false,
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
		/>
	);
};

export default PrimaryCalendar;
