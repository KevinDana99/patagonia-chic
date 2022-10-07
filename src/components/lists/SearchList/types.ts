import Fuse from 'fuse.js';

export type ListItemType = {
	id: string;
	name: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
};

export type SearchListPropsType = {
	list: ListItemType[];
	title?: string;
	searchBar?: boolean;
	searchText?: string;
	onSearchChange?: (query: string) => void;
	onItemSelected?: (selectedItem: ListItemType) => void;
	loading?: boolean;
	error?: boolean;
	emptyStateText?: string;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	engine?: 'fuse' | 'custom';
	fuseConfigs?: Fuse.IFuseOptions<ListItemType>;
	featuredElements?: ListItemType[];
	searchPlaceholder?: string;
	horizontalPadding?: number;
	edgesItemsAddedPadding?: number;
};

export type ItemListStyleType = {
	selected?: boolean;
	horizontalPadding: number;
	edgesItemsAddedPadding: number;
};
