import React, { useEffect, useState } from 'react';

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
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { IoSearch } from 'react-icons/io5';

import { ListItemType, ListType } from './types';
import CustomIcon from '../../graphics/CustomIcon';
import Skeleton from '../../skeletons/Skeleton';

const ListSearch = ({
	list,
	title,
	onSearchChange,
	engine,
	search = false,
	loading,
	onItemClick,
	fuseConfigs = defaultFuseOptions,
	featuredElements = [],
}: ListType) => {
	const [listValue, setListValue] = useState(list);

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

		setListValue(filteredList as ListItemType[]);
		query.length == 0 && setListValue(list);
	};

	return (
		<>
			<Container>
				{title && <OptionalTitle>{title}</OptionalTitle>}
				{search && (
					<BoxSearch>
						<IoSearch />
						<InputSearch
							placeholder="Buscar excursiones"
							onChange={(e) => {
								engine === 'fuse'
									? filterPlaceList(e.target.value)
									: onSearchChange?.(e.target.value);
							}}
						/>
					</BoxSearch>
				)}
				{!loading ? (
					<BoxItemList>
						{listValue.map((item, index) => {
							return (
								<ItemList key={index} onClick={() => onItemClick?.(item.id)}>
									<BoxImage>
										{item.img ? (
											<img src={item.img} />
										) : (
											<CustomIcon name="island" size={25} />
										)}
									</BoxImage>
									<Description>
										<Title>{item.name}</Title>
										<BoxSubtitle>
											{item.category ? (
												<SubTitle>{item.category}</SubTitle>
											) : (
												<>
													<SubTitle>{item.province}</SubTitle>
													<Divisor>-</Divisor>
													<SubTitle>{item.country}</SubTitle>
												</>
											)}
										</BoxSubtitle>
									</Description>
								</ItemList>
							);
						})}
					</BoxItemList>
				) : (
					<LoadingContainer>
						<Skeleton />
					</LoadingContainer>
				)}
			</Container>
		</>
	);
};

const SearchList = withFontStyles(ListSearch);

export default withFontStyles(SearchList);
