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

export type SearchListConfigsType = {
	showSearchBar?: boolean;
	engine?: 'fuse' | 'custom';
	fuseConfigs?: Fuse.IFuseOptions<ListItemType>;
	featuredElements?: ListItemType[];
	horizontalPadding?: number;
	focusOnRender?: boolean;
	edgesItemsAddedPadding?: number;
	onItemSelectedConfigs?: {
		updateSearchTextValue?: boolean;
		itemKeySearchText?: keyof ListItemType;
		resetListValue?: boolean;
	};
};

export type SearchListPropsType = {
	list: ListItemType[];
	title?: string;
	searchText?: string;
	searchPlaceholder?: string;
	onSearchTextChange?: (query: string) => void;
	onItemSelected?: (selectedItem: ListItemType) => void;
	loading?: boolean;
	error?: boolean;
	emptyStateText?: string;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	showItemSubtitle?: boolean;
	configs?: SearchListConfigsType;
};

export type ItemListStyleType = {
	selected?: boolean;
	horizontalPadding: number;
	edgesItemsAddedPadding: number;
};
