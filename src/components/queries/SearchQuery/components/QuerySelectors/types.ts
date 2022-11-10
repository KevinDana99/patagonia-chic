import React from 'react';
import { CurrentSelectorStateType } from '../../types';

export type QuerySelectorsContextType = {
	currentSelector: CurrentSelectorStateType;
	renderAsModal: boolean;
};

export type QuerySelectorsPropsType = {
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
