export type TimelineType = {
	steps: Array<{
		title?: string;
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
		active: boolean;
	}>;
};
