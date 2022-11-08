import React from 'react';

export type CurrentSelectorStateType =
	| 'none'
	| 'location'
	| 'dates'
	| 'dates/start'
	| 'dates/end';

export type QuerySelectorsContextType = {
	currentSelector: CurrentSelectorStateType;
	renderAsModal: boolean;
};

export type QuerySelectorsPropsType = {
	visible: boolean;
	closeAction: () => void;
	currentSelector: CurrentSelectorStateType;
	renderAsModal: boolean;
	children?: React.ReactNode;
};

export type LocationPropsType = {
	children?: React.ReactNode;
};

export type DatesPropsType = {
	children?: React.ReactNode;
};
