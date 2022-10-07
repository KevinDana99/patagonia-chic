import Fuse from 'fuse.js';

export type ListItemType = {
	name: string;
	onClick: () => void;
	id: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
};

export type SearchListPropsType = {
	list: [ListItemType];
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
	searchPlaceHolder?: string;
	onSearchItem: (query: string) => void;
	horizontalPadding?: number;
};

export type ItemListStyleType = {
	selected: boolean;
	horizontalPadding: number;
};

export type ItemListDataType = {
	place: ListItemType | null | undefined;
	startDate: unknown;
	endDate: unknown;
};
