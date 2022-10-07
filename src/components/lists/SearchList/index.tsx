import React, { useEffect, useState } from 'react';

import {
	BoxImage,
	BoxItemList,
	BoxSearch,
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

const SearchList = ({
	list,
	title,
	searchBar = true,
	onSearchChange,
	onItemSelected,
	loading,
	error,
	emptyStateText,
	loadingComponent,
	emptyStateComponent,
	errorComponent,
	engine = 'fuse',
	fuseConfigs = defaultFuseOptions,
	featuredElements = [],
	searchPlaceholder,
	horizontalPadding = 20,
}: SearchListPropsType) => {
	const [listValue, setListValue] = useState<Array<ListItemType>>(list);
	const [keyboardSelectedIndex, setKeyboardSelectedIndex] =
		useKeyboardNavigation(list.length, (index) =>
			onItemSelected?.(listValue[index])
		);

	useEffect(() => {
		setListValue(list);
	}, [list]);

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(list, fuseConfigs);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: featuredElements;

		setListValue(filteredList);
		query.length == 0 && setListValue(list);
	};

	return (
		<>
			<Container>
				<HeaderContainer horizontalPadding={horizontalPadding}>
					{title && (
						<OptionalTitle>
							<Text size={20}>{title}</Text>
						</OptionalTitle>
					)}
					{searchBar && (
						<BoxSearch>
							<IoSearch />
							<InputSearch
								placeholder={searchPlaceholder}
								onChange={(e) => {
									engine === 'fuse'
										? filterPlaceList(e.target.value)
										: onSearchChange?.(e.target.value);
								}}
							/>
						</BoxSearch>
					)}
				</HeaderContainer>

				{error && errorComponent ? (
					errorComponent
				) : !loading ? (
					(listValue.length == 0 && emptyStateText) || emptyStateComponent ? (
						emptyStateComponent || <Text>{emptyStateText}</Text>
					) : (
						<BoxItemList>
							{listValue.map((item, index) => {
								return (
									<ItemList
										key={index}
										onMouseOver={() => setKeyboardSelectedIndex(index)}
										onMouseMove={() => setKeyboardSelectedIndex(index)}
										onMouseOut={() => setKeyboardSelectedIndex(-1)}
										onClick={() => onItemSelected?.(item)}
										selected={index === keyboardSelectedIndex}
										horizontalPadding={horizontalPadding}
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
											<BoxSubtitle>
												<SubTitle>
													<Text size={14} weight={'regular'} color={'#888888'}>
														{item.category ||
															`${item.province} - ${item.country}`}
													</Text>
												</SubTitle>
											</BoxSubtitle>
										</Description>
									</ItemList>
								);
							})}
						</BoxItemList>
					)
				) : loadingComponent ? (
					loadingComponent
				) : (
					<LoadingContainer horizontalPadding={horizontalPadding}>
						<SearchListSkeleton />
					</LoadingContainer>
				)}
			</Container>
		</>
	);
};

export default SearchList;
