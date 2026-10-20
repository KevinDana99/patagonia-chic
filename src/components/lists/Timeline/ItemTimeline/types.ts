import { IconType } from 'react-icons';

export type ItemTimelineType = {
	id: number;
	Icon?: IconType;
	secondaryTitle?: string;
	tertiaryTitle?: {
		options: {
			title?: string;
			price?: string;
			currency?: string;
		};
		link?: string;
	};
	color?: string;
	title?: string;
	active: boolean;
	clear: (id: number) => void;
};
