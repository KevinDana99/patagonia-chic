export type TimelineType = {
	steps: Array<{
		id: number;
		title?: string;
		dateTime?: Date;
		secondaryTitle: string;
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
	texts: { textAvaiableDay: string };
	momentConfig: {
		locale: 'es' | 'en' | 'fr' | 'br' | 'pr';
	};
};
