import Fuse from 'fuse.js';

export interface ListItemType {
	name: string;
	onClick: () => void;
	id: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
}

export type ListType = {
	list: Array<ListItemType>;
	title?: string;
	search?: boolean;
	onSearchChange?: (query: string) => ListItemType[];
	loading?: boolean;
	error?: boolean;
	emptyStateText?: string;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	engine?: 'fuse' | 'custom';
	onItemClick?: (itemId: string) => void;
	fuseConfigs?: Fuse.IFuseOptions<ListItemType>;
	featuredElements?: ListItemType[];
	onChangeSelect?: React.Dispatch<{}>;
	selectedAction?: (item?: Object) => void;
};

export type ItemListStyleType = {
	selected: boolean;
};
