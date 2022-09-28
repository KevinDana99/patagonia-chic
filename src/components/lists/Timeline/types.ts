export type TimelineType = {
	steps: Array<{
		id: number;
		title?: string;
		secondaryTitle?: string;
		tertiaryTitle?: {
			options: {
				title?: string;
				price?: string;
				currency?: string;
			};
			link?: string;
		};
		active: boolean;
	}>;
	clearReserve: () => void;
};
