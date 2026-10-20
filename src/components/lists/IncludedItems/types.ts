export type DetailsType = {
	status: boolean;
	details?: {
		title: string;
		target: string;
	};
};

export type IncludedItemsType = {
	items: Array<{
		title: string;
		included: DetailsType;
		subTitle?: string;
	}>;
};
