import {
	isDateAvailableType,
	getPrevAndNextUnavailableDatesType,
} from './types';

export const getPrevAndNextUnavailableDates: getPrevAndNextUnavailableDatesType =
	(currentDate, availableDates) => {
		if (!currentDate) return null;

		currentDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate(),
			0,
			0,
			0
		);

		const nextUnavailableDate = new Date(currentDate);
		const prevUnavailableDate = new Date(currentDate);
		while (
			!!availableDates?.find(
				(item) => item.getTime() === nextUnavailableDate.getTime()
			)
		) {
			nextUnavailableDate.setDate(nextUnavailableDate.getDate() + 1);
		}

		while (
			!!availableDates?.find(
				(item) => item.getTime() === prevUnavailableDate.getTime()
			)
		) {
			prevUnavailableDate.setDate(prevUnavailableDate.getDate() - 1);
		}

		return [prevUnavailableDate, nextUnavailableDate];
	};

export const isDateAvailable: isDateAvailableType = (
	date,
	availableDatesList,
	prevAndNextUnavailableDate,
	defaultValue = false
) => {
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
	let isAvailable = availableDatesList
		? !!availableDatesList.find((item) => item.getTime() === date.getTime())
		: defaultValue;

	if (prevAndNextUnavailableDate) {
		isAvailable =
			date.getTime() > prevAndNextUnavailableDate[0].getTime() &&
			date.getTime() < prevAndNextUnavailableDate[1].getTime();
	}

	return isAvailable;
};

export const replaceMonthText = (month: string) => {
	const substrMonth = month.split(' ');
	if (substrMonth.length < 3) {
		return month;
	} else {
		return substrMonth[0] + ' ' + substrMonth[2];
	}
};

export const getMinDateOfArray = (dates?: Date[]) =>
	dates?.sort((a, b) => (a < b ? -1 : 1))?.[0];

export const getMaxDateOfArray = (dates?: Date[]) =>
	dates?.sort((a, b) => (a < b ? -1 : 1))?.[dates?.length - 1];
