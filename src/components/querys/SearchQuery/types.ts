import { MomentFormatSpecification, MomentInputObject } from 'moment';
import React from 'react';

interface IPlace {
	name: string;
	id: string;
	img: string;
	province: string;
	country: string;
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

export type OptionItemType = {
	label?: string;
	title?: string;
	onClick?: React.MouseEventHandler;
	value?: string;
	clearData?: () => void;
	isSelected?: boolean | string;
};

export type PlaceListType = {
	places: Array<IPlace>;
	setPlaceData: React.Dispatch<StateSearchQueryType>;
	openCalendar: () => void;
	closeList: () => void;
	values?: StateSearchQueryType;
	dispositive?: string;
};
