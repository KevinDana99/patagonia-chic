export type CurrentSelectorStateType =
	| 'none'
	| 'location'
	| 'dates'
	| 'dates/start'
	| 'dates/end';

export type locationsListItemType = {
	id: string;
	name: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
};

export type SearchQueryPropsType = {
	locationsList: locationsListItemType[];
	texts: SearchQueryTexts;
	onQuerySubmit: Function;
	showLocations: boolean;
	locale: 'en' | 'es';
};

export type SearchQueryTexts = {
	placeholderLocation: string;
	labelLocation: string;
	placeholderDate: string;
	labelStartDate: string;
	labelEndDate: string;
	modalLabelLocation: string;
	modalLabelStartDate: string;
	modalLabelEndDate: string;
	titleSearchButton: string;
};

export type QuerySelectedDataType = {
	location: locationsListItemType | null;
	startDate: Date | null;
	endDate: Date | null;
};

export type ValidationsType = {
	location: boolean;
	startDate: boolean;
	endDate: boolean;
};
