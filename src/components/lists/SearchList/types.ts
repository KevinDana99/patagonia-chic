import React from 'react';
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
	places: Array<ListItemType>;
	search?: boolean;
	onSearchChange?: (query: string) => ListItemType[];
	loading?: boolean;
	loadingComponent?: JSX.Element;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	engine?: 'fuse' | 'custom';
	onItemClick?: (itemId: string) => void;
	fuseConfigs?: Fuse.IFuseOptions<ListItemType>;
};
