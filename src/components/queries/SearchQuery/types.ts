import React, { SetStateAction } from 'react';

export interface IPlace {
	name: string;
	onClick?: () => void;
	id?: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
}

export type SearchQueryType = {
	list: [IPlace];
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

export type StateSearchQueryType = {
	place?: IPlace | null;
	startDate?: { name: string; date?: object } | null;
	endDate?: { name: string; date?: object } | null;
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
	onClick?: React.MouseEventHandler;
	values?: StateSearchQueryType;
	clearData?: () => void;
	isSelected?: boolean | string;
	outsideClick: () => void;
	calendarFocusedInput: string;
	showCalendar: boolean;
	isMobile: boolean;
	closeList: () => void;
	setDates: React.Dispatch<StateSearchQueryType>;
	data: StateSearchQueryType;
	setFocused: React.Dispatch<SetStateAction<string>>;
	closeCalendar: () => void;
	sendData: () => void;
	disableSearch: { place: boolean; startDate: boolean; endDate: boolean };
};

export type DisableSearchType = {
	disableSearch: boolean;
};

export type PlaceListInputType = {
	disableSearch: boolean;
	setDisableSearch: React.Dispatch<
		React.SetStateAction<{
			place: boolean;
			startDate: boolean;
			endDate: boolean;
		}>
	>;
	closeModal: () => void;
	label: string;
	placeholder: string;
	onClick?: React.MouseEventHandler;
	values: StateSearchQueryType;
	clearData: () => void;
	isSelected: boolean;
	inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	outsideClick: () => void;
	placeList: [IPlace];
	setPlaceData: React.Dispatch<SetStateAction<StateSearchQueryType>>;
	isMobile: boolean;
	openCalendar: () => void;
	closeList: () => void;
	showPlaceList: boolean;
	placeFilter?: string | undefined;
};

export type PlaceListType = {
	children: JSX.Element;
};

export interface PlaceContainerType {
	onClick: React.MouseEventHandler<HTMLDivElement>;
	selected: boolean;
	index: React.Key;
}

export type FooterCalendarType = {
	place: IPlace;
	startDate?: { name: string; date?: object } | null;
	endDate?: { name: string; date?: object } | null;
};

export type PlaceListMobileType = {
	places: Array<IPlace>;
	setPlaceData: React.Dispatch<SetStateAction<StateSearchQueryType>>;
	values: StateSearchQueryType;
	inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	openCalendar: () => void;
	closeList: () => void;
};

export type CalendarMobileType = {
	closeList: () => void;
	setDates: React.Dispatch<StateSearchQueryType>;
	data: StateSearchQueryType;
	setCalendarFocusedInput: React.Dispatch<React.SetStateAction<string>>;
	calendarFocusedInput: string;
	isMobile?: boolean;
	sendData: () => void;
	labelEndDate: string;
	labelPlace: string;
	labelStartDate: string;
	placeholderDate: string;
	placeholderPlace: string;
	titleSearchButton: string;
};

export type ListModalType = {
	children: JSX.Element;
	closeModal: () => void;
	visible: boolean;
};

export interface OptionContainerType {
	isSelected: boolean;
}
