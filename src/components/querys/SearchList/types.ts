export interface ListItemType {
	name: string;
	id?: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
}

export type ListType = {
	places: Array<ListItemType>;
	search?: boolean;
	onSearchChange?: (text: string) => undefined;
	loading?: boolean;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
};
