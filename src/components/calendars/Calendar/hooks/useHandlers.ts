import { getPrevAndNextUnavailableDates } from '../../../../utils/dates';
import { useEventHandlersType } from './types';

export const useEventHandlers: useEventHandlersType = ({
	range,
	selectedDates,
	setSelectedDates,
	onRangeEndDateSelected,
	setPrevAndNextUnavailableDate,
	onRangeStartDateSelected,
	onDateSelected,
	onRangeSelected,
	availableDates,
}) => {
	const handleOnChange = (date: Date) => {
		if (range) {
			if (selectedDates === null || selectedDates[1] !== null) {
				setSelectedDates([date, null]);
				onRangeStartDateSelected?.(date);

				if (availableDates) {
					setPrevAndNextUnavailableDate(
						getPrevAndNextUnavailableDates(date, availableDates)
					);
				}
			} else {
				const currSelectedRange = [selectedDates[0], date] as [Date, Date];

				if (currSelectedRange[0] > currSelectedRange[1])
					currSelectedRange.reverse();

				setSelectedDates(currSelectedRange);
				onRangeSelected?.(currSelectedRange);
				onRangeEndDateSelected?.(date);

				if (availableDates) {
					setPrevAndNextUnavailableDate(null);
				}
			}
		} else {
			setSelectedDates([date, null]);
		}
		onDateSelected?.(date);
	};

	return { handleOnChange };
};
