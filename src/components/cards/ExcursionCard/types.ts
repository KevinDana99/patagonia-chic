export type ExcursionCardType = {
	coverImage?: string | JSX.Element;
	date?: { month: string; day: string };
	subTitle?: string;
	title?: string;
	price?: string;
	currency?: string;
	subPrice?: string;
	isAddedToCart?: boolean;
	isAvaiable?: boolean;
	bookingsThisWeekCount?: number;
	texts: {
		buttonDefaultText?: string;
		buttonAddedToCartText?: string;
		buttonAvaiableText?: string;
		detailsAddedText?: string;
		bookingsThisWeekText?: string;
		lastBookingTimeText?: string;
	};
};

export type ExcursionCardStyleType = {
	coverImage?: string | undefined;
};
