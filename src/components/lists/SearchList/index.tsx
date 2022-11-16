import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
	BoxImage,
	BoxItemList,
	BoxSearch,
	CloseIcon,
	BoxSubtitle,
	Container,
	HeaderContainer,
	Description,
	InputSearch,
	ItemList,
	SubTitle,
	Title,
	LoadingContainer,
	OptionalTitle,
} from './styled';

import Fuse from 'fuse.js';
import defaultFuseOptions from '../../../constants/fuseOptions.json';
import { IoSearch } from 'react-icons/io5';
import { ListItemType, SearchListPropsType } from './types';
import CustomIcon from '../../graphics/CustomIcon';
import SearchListSkeleton from './components/SearchListLoaderSkeleton';
import Text from '../../texts/Text';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import NotFoundState from './components/NotFoundState';

const SearchList = ({
	list,
	title,
	searchText = '',
	onSearchTextChange,
	onItemSelected,
	loading,
	error,
	emptyStateText,
	loadingComponent,
	emptyStateComponent,
	errorComponent,
	searchPlaceholder,
	showItemSubtitle = true,
	configs = {},
}: SearchListPropsType) => {
	const {
		showSearchBar = true,
		engine = 'fuse',
		fuseConfigs = defaultFuseOptions,
		featuredElements = [],
		horizontalPadding = 20,
		edgesItemsAddedPadding = 0,
		focusOnRender = false,
		onItemSelectedConfigs: {
			updateSearchTextValue = true,
			itemKeySearchText = defaultFuseOptions.keys[0] as keyof ListItemType,
			resetListValue = true,
		} = {},
	} = configs;

	const [listValue, setListValue] = useState<Array<ListItemType>>(list);
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
			setListValue(query.length === 0 ? list : filteredList);
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

	const [keyboardSelectedIndex, setKeyboardSelectedIndex] =
		useKeyboardNavigation(listValue.length, (index) =>
			handleItemSelected(listValue[index])
		);

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

				{error && errorComponent ? (
					errorComponent
				) : !loading ? (
					(listValue.length === 0 &&
						!(featuredElements?.length > 0) &&
						emptyStateText) ||
					emptyStateComponent ? (
						emptyStateComponent || (
							<NotFoundState values={{ queryText: searchTextValue }} />
						)
					) : (
						<BoxItemList>
							{(listValue.length > 0 ? listValue : featuredElements).map(
								(item, index) => {
									return (
										<ItemList
											key={index}
											onMouseOver={() => setKeyboardSelectedIndex(index)}
											onMouseMove={() => setKeyboardSelectedIndex(index)}
											onMouseOut={() => setKeyboardSelectedIndex(-1)}
											onClick={() => handleItemSelected(item)}
											selected={index === keyboardSelectedIndex}
											horizontalPadding={horizontalPadding}
											edgesItemsAddedPadding={edgesItemsAddedPadding}
										>
											<BoxImage>
												{item.img ? (
													<img src={item.img} />
												) : (
													<CustomIcon name="island" size={25} />
												)}
											</BoxImage>
											<Description>
												<Title>
													<Text size={17} weight={'medium'}>
														{item.name}
													</Text>
												</Title>
												{showItemSubtitle && (
													<BoxSubtitle>
														<SubTitle>
															<Text
																size={14}
																weight={'regular'}
																color={'#888888'}
															>
																{item.category ||
																	`${item.province} - ${item.country}`}
															</Text>
														</SubTitle>
													</BoxSubtitle>
												)}
											</Description>
										</ItemList>
									);
								}
							)}
						</BoxItemList>
					)
				) : loadingComponent ? (
					loadingComponent
				) : (
					<LoadingContainer
						horizontalPadding={horizontalPadding}
						edgesItemsAddedPadding={edgesItemsAddedPadding}
					>
						<SearchListSkeleton />
					</LoadingContainer>
				)}
			</Container>
		</>
	);
};

export default SearchList;
