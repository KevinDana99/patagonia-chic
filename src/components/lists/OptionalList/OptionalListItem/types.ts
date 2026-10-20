import { ReactNode } from 'react';
import { OptionalsListTexts } from '../types';

export type OptionalsListItemType = {
	id: string;
	title: string;
	description?: string;
	price: string;
	priceDescription?: string;
	disabled?: boolean;
	selectedItem: boolean;
	texts: OptionalsListTexts;
	footerContent: ReactNode;
	addItem: (item: OptionalItemState) => void;
	resetList?: boolean;
	showCounterSelect?: true;
	moreInformationContent?: ReactNode;
	removeItem: (item: OptionalItemState) => void;
};

export interface OptionalListItemContainer {
	disabled: boolean;
	selected: boolean;
}

export interface OptionalItemState {
	id: string;
	title: string;
	description?: string;
	price: string;
	priceDescription?: string;
	resetList?: boolean;
	quantity: number | null;
}

export type OptionalItemListState = Array<OptionalItemState>;
