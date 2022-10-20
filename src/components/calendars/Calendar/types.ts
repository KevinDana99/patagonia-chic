export type SelectedRangeType = null | [Date, null] | [Date, Date];

export type PrimaryCalendarType = {
	onDateSelected?: (date: Date) => void;
	range?: boolean;
	disabledDates: Array<Date>;
	doubleCalendar?: boolean;
	defaultMonth?: number;
	onRangeSelected?: (selectedRange: [Date, Date]) => void;
	onRangeStartDateSelected?: (date: Date) => void;
	onRangeEndDateSelected?: (date: Date) => void;
	shadow?: boolean;
	highlightToday?: boolean;
	locale?: 'es' | 'en' | 'fr';
	selectedRange?: SelectedRangeType;
};

export type PrimaryCalendarStyleType = {
	range?: boolean;
	disabledBackArrow?: boolean;
	disableRange?: boolean;
	shadow?: boolean;
	highlightToday: boolean;
};
