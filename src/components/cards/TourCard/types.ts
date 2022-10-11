export type ExcursionCardType = {
	coverImage?: string | JSX.Element;
	date?: { month: string; day: string };
	subTitle?: string;
	title?: string;
	price?: string;
	currencySymbol: string;
	currencyCode: string;
	subPrice?: string;
	isAddedToCart?: boolean;
	isAvailable?: boolean;
	bookingsThisWeekCount?: number;
	onViewCart?: () => void;
	onViewDetails?: () => void;
	onAddedToCart?: () => void;
	texts: ExcursionCardTexts;
};

export type ExcursionCardTexts = {
	buttonDefaultText?: string;
	buttonAddedToCartText?: string;
	buttonAvaiableText?: string;
	detailsAddedText?: string;
	bookingsThisWeekText?: string;
	lastBookingTimeText?: string;
};

export type ExcursionCardStyleType = {
	coverImage?: string | undefined;
};
