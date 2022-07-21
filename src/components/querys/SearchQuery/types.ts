import React from 'react';

export interface IPlace {
	name: string;
	id?: string;
	img?: string;
	province?: string;
	country?: string;
}

export type DispositiveType = {
	dispositive?: string;
};

export type SearchQueryType = {
	places: [IPlace];
	onQuerySubmit: Function;
	dispositive?: string;
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
	dispositive?: string;
};

export type CalendarInputType = {
	labels: string[];
	titles: string[];
	onClick?: React.MouseEventHandler;
	values?: StateSearchQueryType;
	clearData?: () => void;
	isSelected?: boolean | string;
	children: React.ReactNode;
	outsideClick: () => void;
	calendarFocusedInput: string;
	showCalendar: boolean;
};

export type PlaceListInputType = {
	label: string;
	placeholder: string;
	onClick?: React.MouseEventHandler;
	value: string | undefined;
	clearData: () => void;
	isSelected: boolean;
	inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	children: React.ReactNode;
	outsideClick: () => void;
}

export type PlaceListType = {
	places: Array<IPlace>;
	setPlaceData: React.Dispatch<StateSearchQueryType>;
	openCalendar: () => void;
	closeList: () => void;
	values?: StateSearchQueryType;
	dispositive?: string;
	placeFilter: () => void;
	showList: boolean;
};

export type FooterCalendarType = {
	place: IPlace;
	startDate?: { name: string; date?: object } | null;
	endDate?: { name: string; date?: object } | null;
}

export type PlaceListMobileType = {
	dispositive?: string;
	places: Array<IPlace>;
	data: StateSearchQueryType;
	showPlaceList: boolean;
	showCalendar: boolean;
	setShowCalendar: () => void;
	setPlaceData: () => void;
	setShowPlaceList: () => void;
	setFocused: () => void;
	focused: boolean;
	setCalendarData: boolean;
	openCloseModal: () => void;
	filterPlaceList: () => void;
	query: string;
	setQuery: () => void;
}