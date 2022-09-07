export type ExcursionCardType = {
	coverImage?: string | JSX.Element;
	date?: string | Date;
	subTitle?: string;
	title?: string;
	price?: string;
	currency?: string;
	subPrice?: string;
	active?: boolean;
};

export type ExcursionCardStyleType = {
	coverImage?: string | undefined;
};
