import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
	BoxSearch,
	CloseIcon,
	Container,
	HeaderContainer,
	InputSearch,
	OptionalTitle,
} from './styled';

import Fuse from 'fuse.js';
import defaultFuseOptions from '../../../constants/fuseOptions.json';
import { IoSearch } from 'react-icons/io5';
import { ListItemType, SearchListPropsType } from './types';
import Text from '../../texts/Text';
import ListWrapper from './components/ListWrapper';
import List from './components/List';

const SearchList = ({
	list,
	title,
	searchText = '',
	onSearchTextChange,
	onItemSelected,
	loading,
	error,
	loadingComponent,
	emptyStateComponent,
	errorComponent,
	searchPlaceholder,
	showItemSubtitle = true,
	texts,
	configs = {},
}: SearchListPropsType) => {
	const {
		showSearchBar = true,
		engine = 'fuse',
		fuseConfigs = defaultFuseOptions,
		horizontalPadding = 20,
		edgesItemsAddedPadding = 0,
		focusOnRender = false,
		onItemSelectedConfigs: {
			updateSearchTextValue = true,
			itemKeySearchText = defaultFuseOptions.keys[0] as keyof ListItemType,
			resetListValue = true,
		} = {},
	} = configs;

	const featuredList = list.filter((item) => item.featured);
	const [listValue, setListValue] = useState<Array<ListItemType>>(
		featuredList.length > 0 ? featuredList : list
	);
	const [searchTextValue, setSearchTextValue] = useState(searchText);

	const inputSearchRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (focusOnRender && inputSearchRef.current) {
			inputSearchRef.current.focus();
		}
	}, [inputSearchRef, focusOnRender]);

	useEffect(() => {
		setListValue(list);
	}, [list]);

	const filterPlaceList = useCallback(
		(query: string) => {
			const fusePlaceList = new Fuse(list, fuseConfigs);
			const filteredResult = fusePlaceList.search(query);
			const filteredList = filteredResult.map(
				(filteredPlace) => filteredPlace.item
			);

			const featuredList = list.filter((item) => item.featured);

			setListValue(
				query.length === 0
					? featuredList.length > 0
						? featuredList
						: list
					: filteredList
			);
		},
		[fuseConfigs, list]
	);

	const handleItemSelected = (selectedItem: ListItemType) => {
		onItemSelected?.(selectedItem);
		if (updateSearchTextValue) {
			setSearchTextValue(selectedItem[itemKeySearchText] as string);
			onSearchTextChange?.(selectedItem[itemKeySearchText] as string);
		}
		if (resetListValue) {
			setListValue(list);
		}
	};

	const handleSearchTextChange = useCallback(
		(newText: string) => {
			setSearchTextValue(newText);
			if (engine === 'fuse') filterPlaceList(newText);
			onSearchTextChange?.(newText);
		},
		[engine, filterPlaceList, onSearchTextChange]
	);

	useEffect(() => {
		handleSearchTextChange(searchText);
	}, [searchText, handleSearchTextChange]);

	return (
		<>
			<Container>
				{(title || showSearchBar) && (
					<HeaderContainer horizontalPadding={horizontalPadding}>
						{title && (
							<OptionalTitle>
								<Text size={20}>{title}</Text>
							</OptionalTitle>
						)}
						{showSearchBar && (
							<BoxSearch>
								<IoSearch />
								<InputSearch
									ref={inputSearchRef}
									value={searchTextValue}
									placeholder={searchPlaceholder}
									onChange={(e) => {
										handleSearchTextChange(e.target.value);
									}}
								/>
								{searchTextValue.length > 0 && (
									<CloseIcon onClick={() => handleSearchTextChange('')} />
								)}
							</BoxSearch>
						)}
					</HeaderContainer>
				)}
				<ListWrapper
					list={listValue}
					error={error}
					errorComponent={errorComponent}
					loading={loading}
					loadingComponent={loadingComponent}
					emptyStateText={texts.emptyStateText}
					emptyStateComponent={emptyStateComponent}
					horizontalPadding={horizontalPadding}
					edgesItemsAddedPadding={edgesItemsAddedPadding}
					searchTextValue={searchTextValue}
				>
					<List
						list={listValue}
						handleItemSelected={handleItemSelected}
						horizontalPadding={horizontalPadding}
						edgesItemsAddedPadding={edgesItemsAddedPadding}
						showItemSubtitle={showItemSubtitle}
					/>
				</ListWrapper>
			</Container>
		</>
	);
};

export default SearchList;
