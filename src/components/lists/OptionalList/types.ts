import { ReactNode } from 'react';
import { OptionalItemListState } from './OptionalListItem/types';

export type OptionalsListType = {
	list: Array<OptionalsListItemData>;
	optionalType: 'checkbox' | 'radio';
	onSelectedChange: (list: OptionalItemListState) => void;
	texts: OptionalsListTexts;
};

export type OptionalsListTexts = {
	moreInformation: string;
	hideInformation: string;
	selectQuantity: string;
};

export type OptionalsListItemData = {
	id: string;
	title: string;
	description?: string;
	price: string;
	priceDescription?: string;
	disabled?: boolean;
	onClickInformation?: () => void;
	footerContent: ReactNode;
	resetList: boolean;
	moreInformationContent?: ReactNode;
};
