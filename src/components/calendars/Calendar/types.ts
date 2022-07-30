export type PrimaryCalendarType = {
	onDaySelected?: (day: Date) => void;
	range?: boolean;
	disabledDates: Array<Date>;
};
