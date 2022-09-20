import React, { SetStateAction } from 'react';

export interface IPlace {
	name: string;
	id?: string;
	img?: string;
	province?: string;
	country?: string;
	featured?: boolean;
}

export type SearchQueryType = {
	places: [IPlace];
	onQuerySubmit: Function;
	showLocations: boolean;
	texts: SearchQueryTextsType;
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
};

export type CalendarInputType = {
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
	texts: SearchQueryTextsType;
};

export type PlaceListInputType = {
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
	texts: SearchQueryTextsType;
};

export type PlaceListType = {
	places: Array<IPlace>;
	setPlaceData: React.Dispatch<StateSearchQueryType>;
	openCalendar: () => void;
	closeList: () => void;
	values?: StateSearchQueryType;
	placeFilter?: () => void;
	showList?: boolean;
	texts: SearchQueryTextsType;
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
	texts: SearchQueryTextsType;
};

export type CalendarMobileType = {
	closeList: () => void;
	setDates: React.Dispatch<StateSearchQueryType>;
	data: StateSearchQueryType;
	setCalendarFocusedInput: React.Dispatch<React.SetStateAction<string>>;
	calendarFocusedInput: string;
	isMobile: boolean;
	sendData: () => void;
	texts: SearchQueryTextsType;
};

export type ListModalType = {
	children: React.ReactNode;
	closeModal: () => void;
};

export interface OptionContainerType {
	isSelected: boolean;
}

type SearchQueryTextsType = {
	placeListInputLabel: string;
	placeListInputPlaceholder: string;
	calendarInputStartDateLabel: string;
	calendarInputEndDateLabel: string;
	calendarInputSelectDate: string;
	calendarInputButtonTitle: string;
	mobileCalendarInputDateLabel: string;
	mobileCalendarInputEndDateLabel: string;
	mobileCalendarInputStartDateLabel: string;
	placeListEmptyList: string;
};
