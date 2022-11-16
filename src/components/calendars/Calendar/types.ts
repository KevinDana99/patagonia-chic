export type SelectedRangeType = null | [Date, null] | [Date, Date];
export type CalendarContainerWidthType = number | `${number}${'px' | '%'}`;

export type CalendarPropsType = {
	onDateSelected?: (date: Date) => void;
	range?: boolean;
	doubleCalendar?: boolean;
	defaultActiveStartDate?: Date;
	onRangeSelected?: (selectedRange: [Date, Date]) => void;
	onRangeStartDateSelected?: (date: Date) => void;
	onRangeEndDateSelected?: (date: Date) => void;
	shadow?: boolean;
	highlightToday?: boolean;
	locale?: 'es' | 'en' | 'fr';
	selectedRange?: SelectedRangeType;
	availableDates?: Date[];
	minDate?: Date;
	maxDate?: Date;
	width?: CalendarContainerWidthType;
	texts?: {
		availableReference?: string;
	};
	value?: SelectedRangeType;
	defaultValue?: Date | Date[];
	returnValue?: 'range' | 'start' | 'end';
	doubleCalendarSpaceBetween?: number;
};

export type CalendarStyleType = {
	range?: boolean;
	shadow?: boolean;
	highlightToday: boolean;
	calendarWidth: number;
	width: string;
	tileHeight: number;
	doubleCalendarSpaceBetween: number;
};
