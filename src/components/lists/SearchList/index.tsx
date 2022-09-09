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
} from './styled';

import Fuse from 'fuse.js';
import fuzePlaceListOptions from '../../../constants/fuseOptions.json';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { IoSearch } from 'react-icons/io5';

import { ListItemType, ListType } from './types';
import CustomIcon from '../../graphics/CustomIcon';
import PrimarySpinner from '../../spinners/PrimarySpinner';

const ListSearch = ({
	places,
	onSearchChange,
	engine = 'fuse',
	search = false,
	loading,
	onItemClick,
}: ListType) => {
	const [allPlaces, setAllPlaces] = useState(places);

	console.log('onSearchChange', onSearchChange);

	useEffect(() => {
		setAllPlaces(places);
	}, [places]);

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(places, fuzePlaceListOptions);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: allPlaces.filter((place) => place.featured);

		setAllPlaces(filteredList as [ListItemType]);
		query.length == 0 && setAllPlaces(places);
	};

	return (
		<>
			{!loading ? (
				<Container>
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

					<BoxItemList>
						{allPlaces.map((place, index) => {
							return (
								<ItemList key={index} onClick={() => onItemClick?.(place.id)}>
									<BoxImage>
										{place.img ? (
											<img src={place.img} />
										) : (
											<CustomIcon name="island" size={25} />
										)}
									</BoxImage>
									<Description>
										<Title>{place.name}</Title>
										<BoxSubtitle>
											{place.category ? (
												<SubTitle>{place.category}</SubTitle>
											) : (
												<>
													<SubTitle>{place.province}</SubTitle>
													<Divisor>-</Divisor>
													<SubTitle>{place.country}</SubTitle>
												</>
											)}
										</BoxSubtitle>
									</Description>
								</ItemList>
							);
						})}
					</BoxItemList>
				</Container>
			) : (
				<LoadingContainer>
					<PrimarySpinner theme="light" size={40} />
				</LoadingContainer>
			)}
		</>
	);
};

const SearchList = withFontStyles(ListSearch);

export default withFontStyles(SearchList);
