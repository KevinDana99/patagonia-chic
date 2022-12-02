export type isDateAvailableType = (
	date: Date,
	availableDatesList?: Date[],
	prevAndNextUnavailableDate?: [Date, Date] | null,
	defaultValue?: boolean
) => boolean;

export type getPrevAndNextUnavailableDatesType = (
	currentDate: Date,
	availableDatesList: Date[] | null
) => [Date, Date] | null;
