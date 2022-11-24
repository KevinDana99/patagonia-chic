import { locationsListItemType, SearchQueryTexts } from '../../../../types';

export type SelectionItemPropsType = {
	label: string;
	value?: string | null;
};

export type ModalSelectionsPropsType = {
	location: locationsListItemType | null;
	startDate: Date | null;
	endDate: Date | null;
	texts: SearchQueryTexts;
};
