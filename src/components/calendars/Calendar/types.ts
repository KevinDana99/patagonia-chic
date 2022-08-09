export type PrimaryCalendarType = {
	onDaySelected?: (day: Date) => void;
	range?: boolean;
	disabledDates: Array<Date>;
	doubleCalendar?: boolean;
	defaultMonth?: number;
	onRangeSelected?: (day: Date) => void;
	onRangeStartDateSelected?: (day: Date[]) => void;
	onRangeEndDateSelected?: (day: Date[]) => void;
	shadow?: boolean;
};

export type PrimaryCalendarStyleType = {
	range?: boolean;
	disabledBackArrow?: boolean;
	disableRange?: boolean;
	shadow?: boolean;
};
