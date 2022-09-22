import React from 'react';
import { IconType } from 'react-icons';

export type ItemTimelineType = {
	Icon?: IconType;
	secondaryTitle?: string;
	tertiaryTitle?: {
		options: {
			title?: string;
			price?: string;
			currency?: string;
			clear: () => void;
		};
		link?: string;
	};
	color?: string;
	title?: string;
	active: boolean;
};
