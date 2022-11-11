import { useDimensions } from '../../../../hooks/useDimensions';
import { CalendarWidthType } from '../types';

export const useCalendarWidth = (
	calendarWidthProp: CalendarWidthType,
	calendarRef: React.RefObject<HTMLDivElement>,
	doubleCalendar?: boolean
) => {
	const { width } = useDimensions(calendarRef);

	const doubleMultiplier = doubleCalendar ? 2 : 1;

	let containerWidth = 'min-content';
	let calendarWidth = parseFloat(calendarWidthProp as string);
	if (
		typeof calendarWidthProp === 'string' &&
		calendarWidthProp.includes('%')
	) {
		containerWidth = calendarWidthProp;
		calendarWidth = width / doubleMultiplier;
	}

	const tileHeight = calendarWidth / 7;

	return { containerWidth, calendarWidth, tileHeight };
};
