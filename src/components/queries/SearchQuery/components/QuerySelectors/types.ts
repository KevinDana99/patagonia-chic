import React from 'react';
import {
	CurrentSelectorStateType,
	QuerySelectedDataType,
	SearchQueryTexts,
} from '../../types';

export type QuerySelectorsContextType = {
	currentSelector: CurrentSelectorStateType;
	renderAsModal: boolean;
	querySelectedData: QuerySelectedDataType;
	texts: SearchQueryTexts;
};

export type QuerySelectorsPropsType = {
	closeAction: () => void;
	currentSelector: CurrentSelectorStateType;
	renderAsModal: boolean;
	children?: React.ReactNode;
	querySelectedData: QuerySelectedDataType;
	texts: SearchQueryTexts;
};

export type LocationPropsType = {
	children?: React.ReactNode;
};

export type DatesPropsType = {
	children?: React.ReactNode;
	handleSubmit: () => void;
};
