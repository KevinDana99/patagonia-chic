import React from 'react';
import NotFoundState from '../NotFoundState';
import SearchListSkeleton from '../SearchListLoaderSkeleton';
import { LoadingContainer } from './styled';
import { ListWrapperPropsType } from './types';

const ListWrapper = ({
	loading,
	loadingComponent,
	horizontalPadding,
	edgesItemsAddedPadding,
	error,
	errorComponent,
	list,
	emptyStateComponent,
	emptyStateText,
	searchTextValue,
	children,
}: ListWrapperPropsType): JSX.Element => {
	if (loading) {
		if (loadingComponent) return loadingComponent;
		else {
			return (
				<LoadingContainer
					horizontalPadding={horizontalPadding}
					edgesItemsAddedPadding={edgesItemsAddedPadding}
				>
					<SearchListSkeleton />
				</LoadingContainer>
			);
		}
	}

	if (error) {
		if (errorComponent) return errorComponent;
	}

	if (list.length === 0) {
		if (emptyStateComponent) return emptyStateComponent;
		else {
			return (
				<NotFoundState
					message={emptyStateText}
					values={{ queryText: searchTextValue ?? '' }}
				/>
			);
		}
	}

	return children as JSX.Element;
};

export default ListWrapper;
