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
} from './styled';

import Fuse from 'fuse.js';
import { fuzePlaceListOptions } from '../../../consntants/fuzeOptions';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { IoSearch } from 'react-icons/io5';

import { IPlace, PlaceListType } from './types';
import CustomIcon from '../../graphics/CustomIcon';

const ListSearch = ({ places }: PlaceListType) => {
	const [query, setQuery] = useState(null);
	const [allPlaces, setAllPlaces] = useState(places);

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(places, fuzePlaceListOptions);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: allPlaces.filter((place) => place.featured);

		setAllPlaces(filteredList as [IPlace]);
	};

	return (
		<Container>
			<BoxSearch>
				<IoSearch />
				<InputSearch
					placeholder="Buscar excursiones"
					onChange={(e) => {
						filterPlaceList(e.target.value);
					}}
				/>
			</BoxSearch>

			<BoxItemList>
				{allPlaces.map((place, index) => {
					return (
						<ItemList key={index}>
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
									<SubTitle>{place.province}</SubTitle>
									<Divisor>-</Divisor>
									<SubTitle>{place.country}</SubTitle>
								</BoxSubtitle>
							</Description>
						</ItemList>
					);
				})}
			</BoxItemList>
		</Container>
	);
};

const SearchList = withFontStyles(ListSearch);

export default withFontStyles(SearchList);
