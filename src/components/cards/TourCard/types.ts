export type ExcursionCardType = {
	coverImage?: string | JSX.Element;
	imageList?: ImageListArray[];
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
	className?: string;
	onClickCard: React.MouseEventHandler<HTMLDivElement>;
};

export type ExcursionCardTexts = {
	buttonDefaultText: string;
	buttonAddedToCartText: string;
	buttonAvailableText: string;
	detailsAddedText: string;
	bookingsThisWeekText: string;
	lastBookingTimeText: string;
};

export type ExcursionCardStyleType = {
	coverImage?: string | undefined;
};

export type ImageListArray = {
	alt: string;
	uri: string;
};
