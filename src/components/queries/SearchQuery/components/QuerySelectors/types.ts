import React from 'react';

export type QuerySelectorsContextType = {
	showLocationSelector: boolean;
	showDatesSelector: boolean;
	isMobile: boolean;
	setShowLocationSelector: (isVisible: boolean) => void;
	setShowDatesSelector: (isVisible: boolean) => void;
};

export type QuerySelectorsPropsType = {
	isMobile: boolean;
	showLocation: boolean;
	showDates: boolean;
	children?: React.ReactNode;
};

export type LocationPropsType = {
	children?: React.ReactNode;
};
