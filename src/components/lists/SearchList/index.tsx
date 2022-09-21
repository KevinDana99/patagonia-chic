import React, { useCallback, useEffect, useState } from 'react';

import {
	BoxImage,
	BoxItemList,
	BoxSearch,
	BoxSubtitle,
	Container,
	Description,
	InputSearch,
	ItemList,
	SubTitle,
	Title,
	Divisor,
	LoadingContainer,
	OptionalTitle,
} from './styled';

import Fuse from 'fuse.js';
import defaultFuseOptions from '../../../constants/fuseOptions.json';
import { IoSearch } from 'react-icons/io5';

import { ListItemType, ListType } from './types';
import CustomIcon from '../../graphics/CustomIcon';
import Skeleton from '../../skeletons/Skeleton';
import Text from '../../texts/Text';

const SearchList = ({
	list,
	title,
	onSearchChange,
	engine = 'fuse',
	search = false,
	loading,
	onItemClick,
	fuseConfigs = defaultFuseOptions,
	featuredElements = [],
	loadingComponent,
	emptyStateText,
	emptyStateComponent,
	errorComponent,
	error,
	onChangeSelect,
	selectedAction,
	searchPlaceHolder,
}: ListType) => {
	const [listValue, setListValue] = useState(list);
	const [data, setData] = useState({
		place: null,
		startDate: null,
		endDate: null,
	});

	useEffect(() => {
		setListValue(list);
	}, [list]);

	useEffect(() => {
		onChangeSelect && onChangeSelect(data);
	}, [data]);

	const selectItem = (item: ListItemType) => {
		setData({ ...data, place: item });
	};

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(list, fuseConfigs);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: featuredElements.filter((item) => item.featured == true);

		setListValue(filteredList as ListItemType[]);
		query.length == 0 && setListValue(list);
	};

	const [showCurrentPosition, setShowCurrentPosition] =
		useState<boolean>(false);
	const [cursorPosition, setCursorPosition] = useState<number>(0);

	const setCurrentPlace = useCallback(
		(position: number) => {
			setData({
				...data,
				place: list.at(position),
			});
		},
		[list, setData, data]
	);

	const keyHandler = useCallback(
		({ key }: { key: string }) => {
			setCursorPosition((prevState) => {
				const cursorIncrease = prevState < list.length - 1 ? prevState + 1 : 0;

				const cursorDecrease = prevState > 0 ? prevState - 1 : list.length - 1;

				switch (true) {
					case key === 'Enter':
						selectedAction && selectedAction();
						break;

					case key === 'ArrowDown' && !showCurrentPosition:
						!showCurrentPosition && setShowCurrentPosition(true);
						setCurrentPlace(0);
						return 0;

					case key === 'ArrowDown' && showCurrentPosition:
						setCurrentPlace(cursorIncrease);
						return cursorIncrease;

					case key === 'ArrowUp' && !showCurrentPosition:
						!showCurrentPosition && setShowCurrentPosition(true);
						setCurrentPlace(list.length - 1);
						return list.length - 1;

					case key === 'ArrowUp' && showCurrentPosition:
						setCurrentPlace(cursorDecrease);
						return cursorDecrease;
				}
				return prevState;
			});
		},
		[list.length, setCurrentPlace, showCurrentPosition]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyHandler);
		return () => {
			document.removeEventListener('keydown', keyHandler);
		};
	}, [keyHandler]);

	return (
		<>
			<Container>
				{title && (
					<OptionalTitle>
						<Text size={20}>{title}</Text>
					</OptionalTitle>
				)}
				{search && (
					<BoxSearch>
						<IoSearch />
						<InputSearch
							placeholder={searchPlaceHolder}
							onChange={(e) => {
								engine === 'fuse'
									? filterPlaceList(e.target.value)
									: onSearchChange?.(e.target.value);
							}}
						/>
					</BoxSearch>
				)}

				{error && errorComponent ? (
					errorComponent
				) : !loading ? (
					emptyStateText || emptyStateComponent ? (
						emptyStateComponent || emptyStateText
					) : (
						<BoxItemList>
							{listValue.map((item, index) => {
								return (
									<ItemList
										key={index}
										onClick={(e) => {
											selectItem(item);
											onItemClick?.(item.id);
											selectedAction && selectedAction(item);
										}}
										selected={showCurrentPosition && index === cursorPosition}
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
												{item.category ? (
													<SubTitle>
														<Text
															size={14}
															weight={'regular'}
															color={'#888888'}
														>
															{item.category}
														</Text>
													</SubTitle>
												) : (
													<>
														<SubTitle>
															<Text
																size={14}
																weight={'regular'}
																color={'#888888'}
															>
																{item.province}
															</Text>
														</SubTitle>
														<Divisor>-</Divisor>
														<SubTitle>
															<Text
																size={14}
																weight={'regular'}
																color={'#888888'}
															>
																{item.country}
															</Text>
														</SubTitle>
													</>
												)}
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
					<LoadingContainer>
						<Skeleton />
					</LoadingContainer>
				)}
			</Container>
		</>
	);
};

export default SearchList;
