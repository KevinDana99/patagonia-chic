export type ExcursionCardType = {
	coverImage?: string | JSX.Element;
	date?: string;
	subTitle?: string;
	title?: string;
	price?: string;
	currency?: string;
	subPrice?: string;
	isAddedToCart?: boolean;
	isAvaiable?: boolean;
	options?: { countReservesWeek: string; timeLatestReserve: string };
	buttonDefaultText?: string;
	buttonAddedToCartText?: string;
	buttonAvaiableText?: string;
	detailsAddedText?: string;
};

export type ExcursionCardStyleType = {
	coverImage?: string | undefined;
};
