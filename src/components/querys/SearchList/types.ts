type ListItemType = {
	title: string;
	subtitle?: string;
	image?: string;
};

type ListType = {};

export interface IPlace {
	name: string;
	id?: string;
	img?: string;
	province?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
}

export type PlaceListType = {
	places: Array<IPlace>;
};

/*

type ListType = {
	title?: string;
	list: ListItemType[];
	search?: boolean;
	onSearchChange?: (text: string) => undefined;
	loading?: boolean;
	emptyStateText?: string;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	defaultElements: ListItemType[];
};
*/
