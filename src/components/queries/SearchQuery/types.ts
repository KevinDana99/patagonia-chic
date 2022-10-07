import React, { SetStateAction } from 'react';

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
};

export type SearchQueryTexts = {
	placeholderPlace: string;
	labelPlace: string;
	placeholderDate: string;
	labelStartDate: string;
	labelEndDate: string;
	titleSearchButton: string;
};

export type QuerySelectedDataType = {
	location: locationsListItemType | null;
	startDate: { name: string; date?: object } | null;
	endDate: { name: string; date?: object } | null;
};

export type CalendarType = {
	setDates?: React.Dispatch<StateSearchQueryType>;
	values?: StateSearchQueryType;
	setFocused?: React.Dispatch<React.SetStateAction<string>>;
	focused?: string;
	closeCalendar?: () => void;
	isMobile: boolean;
	disableSearch: { place: boolean; startDate: boolean; endDate: boolean };
};

export type CalendarInputType = {
	openCalendar: () => void;
	labels: string[];
	titles: string[];
	values?: StateSearchQueryType;
	clearData?: () => void;
	isSelected?: boolean | string;
	outsideClick: () => void;
	calendarFocusedInput: string;
	showCalendar: boolean;
	isMobile: boolean;
	setDates: React.Dispatch<StateSearchQueryType>;
	data: StateSearchQueryType;
	setFocused: React.Dispatch<SetStateAction<string>>;
	closeCalendar: () => void;
	disableSearch: { place: boolean; startDate: boolean; endDate: boolean };
};

export type DisableSearchType = {
	disableSearch: boolean;
};

export type FooterCalendarType = {
	place: IPlace;
	startDate?: { name: string; date?: object } | null;
	endDate?: { name: string; date?: object } | null;
};

export type CalendarMobileType = {
	closeList: () => void;
	setDates: React.Dispatch<StateSearchQueryType>;
	data: StateSearchQueryType;
	setCalendarFocusedInput: React.Dispatch<React.SetStateAction<string>>;
	calendarFocusedInput: string;
	isMobile?: boolean;
	labelEndDate: string;
	labelPlace: string;
	labelStartDate: string;
	titleSearchButton: string;
	sendData: () => void;
};

export type ListModalType = {
	children: JSX.Element;
	closeModal: () => void;
	visible: boolean;
};

export interface OptionContainerType {
	isSelected: boolean;
}
