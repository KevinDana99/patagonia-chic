import React from 'react';

export type QuerySelectorsContextType = {
	showLocationSelector: boolean;
	showDatesSelector: boolean;
	renderAsModal: boolean;
	setShowLocationSelector: (isVisible: boolean) => void;
	setShowDatesSelector: (isVisible: boolean) => void;
};

export type QuerySelectorsPropsType = {
	renderAsModal: boolean;
	showLocation: boolean;
	showDates: boolean;
	children?: React.ReactNode;
};

export type LocationPropsType = {
	children?: React.ReactNode;
};
