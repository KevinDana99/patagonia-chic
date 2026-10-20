import React from 'react';
import { ListItemType } from '../../types';

export type ListWrapperPropsType = {
	loading?: boolean;
	loadingComponent?: JSX.Element;
	horizontalPadding: number;
	edgesItemsAddedPadding: number;
	list: ListItemType[];
	error?: boolean;
	emptyStateText: string;
	searchTextValue?: string;
	emptyStateComponent?: JSX.Element;
	errorComponent?: JSX.Element;
	children: React.ReactNode;
};
