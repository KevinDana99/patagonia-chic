import { useDimensions } from '../../../../hooks/useDimensions';
import { CalendarWidthType } from '../types';

export const useCalendarWidth = (
	calendarWidthProp: CalendarWidthType,
	calendarRef: React.RefObject<HTMLDivElement>,
	margin: number,
	doubleCalendar?: boolean
) => {
	const { width } = useDimensions(calendarRef);

	let containerWidth = 'min-content';
	let calendarWidth = parseFloat(calendarWidthProp as string);
	if (
		typeof calendarWidthProp === 'string' &&
		calendarWidthProp.includes('%')
	) {
		containerWidth = calendarWidthProp;
		calendarWidth = width / (doubleCalendar ? 2 : 1);
	}

	const tileHeight = (calendarWidth - margin * 2) / 7;

	return { containerWidth, calendarWidth, tileHeight };
};
