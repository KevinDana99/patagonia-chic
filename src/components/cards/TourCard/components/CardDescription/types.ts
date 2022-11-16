import { ExcursionCardTexts } from '../../types';

export type CardDescriptionType = {
	title?: string;
	subTitle?: string;
	isAvailable?: boolean;
	isAddedToCart?: boolean;
	currencySymbol: string;
	price?: string;
	currencyCode: string;
	subPrice?: string;
	onViewCart?: () => void;
	onViewDetails?: () => void;
	onAddedToCart?: () => void;
	texts: ExcursionCardTexts;
};
