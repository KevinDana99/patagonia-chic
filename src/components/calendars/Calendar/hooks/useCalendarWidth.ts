import { useDimensions } from '../../../../hooks/useDimensions';
import { CalendarContainerWidthType } from '../types';

export const useCalendarWidth = (
	containerWidthProp: CalendarContainerWidthType,
	calendarRef: React.RefObject<HTMLDivElement>,
	doubleCalendarSpaceBetween: number,
	doubleCalendar?: boolean
) => {
	const { width } = useDimensions(calendarRef);

	let containerWidth =
		containerWidthProp + (typeof containerWidthProp === 'number' ? 'px' : '');
	const calendarSpaceBetween = doubleCalendar ? doubleCalendarSpaceBetween : 0;
	let calendarContainerUsedWidth = parseFloat(containerWidthProp as string);

	if (
		typeof containerWidthProp === 'string' &&
		containerWidthProp.includes('%')
	) {
		containerWidth = containerWidthProp;
		calendarContainerUsedWidth = width;
	}

	const calendarWidth =
		(calendarContainerUsedWidth - calendarSpaceBetween) /
		(doubleCalendar ? 2 : 1);

	const tileHeight = calendarWidth / 7;

	return { containerWidth, calendarWidth, tileHeight };
};
