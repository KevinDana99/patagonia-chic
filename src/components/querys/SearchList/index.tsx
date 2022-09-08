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
import { fuzePlaceListOptions } from '../../../consntants/fuzeOptions';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { IoSearch } from 'react-icons/io5';

import { ListItemType, ListType } from './types';
import CustomIcon from '../../graphics/CustomIcon';
import PrimarySpinner from '../../spinners/PrimarySpinner';

const ListSearch = ({
	places,
	onSearchChange,
	search = false,
	loading,
	engine,
}: ListType) => {
	const [allPlaces, setAllPlaces] = useState(places);

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(places, fuzePlaceListOptions);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: allPlaces.filter((place) => place.featured);

		setAllPlaces(filteredList as [ListItemType]);
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
									engine == 'server' && onSearchChange
										? onSearchChange(e.target.value)
										: filterPlaceList(e.target.value);
								}}
							/>
						</BoxSearch>
					)}

					<BoxItemList>
						{allPlaces.map((place, index) => {
							return (
								<ItemList key={index} onClick={place.onClick}>
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
