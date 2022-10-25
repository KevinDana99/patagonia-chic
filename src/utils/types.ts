export type isDateAvailableType = (
	date: Date,
	availableDatesList?: Date[],
	defaultValue?: boolean,
	prevAndNextUnavailableDate?: [Date, Date] | null
) => boolean;

export type getPrevAndNextUnavailableDatesType = (
	currentDate: Date,
	availableDatesList: Date[] | null
) => [Date, Date] | null;
