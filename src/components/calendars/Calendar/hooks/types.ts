import { SelectedRangeType } from '../types';

export type useComponentLogicArgsType = {
	minDate?: Date;
	maxDate?: Date;
	range?: boolean;
	selectedDates: SelectedRangeType;
	setSelectedDates: React.Dispatch<React.SetStateAction<SelectedRangeType>>;
	setPrevAndNextUnavailableDate: React.Dispatch<
		React.SetStateAction<[Date, Date] | null>
	>;
	onDateSelected?: (date: Date) => void;
	onRangeSelected?: (selectedRange: [Date, Date]) => void;
	onRangeStartDateSelected?: (date: Date) => void;
	onRangeEndDateSelected?: (date: Date) => void;
	availableDates?: Date[];
};
