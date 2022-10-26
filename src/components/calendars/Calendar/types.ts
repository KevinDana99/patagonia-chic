export type SelectedRangeType = null | [Date, null] | [Date, Date];

export type CalendarType = {
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
	calendarWidth?: number;
	texts?: {
		availableReference?: string;
	};
};

export type CalendarStyleType = {
	range?: boolean;
	shadow?: boolean;
	highlightToday: boolean;
	calendarWidth: number;
};
