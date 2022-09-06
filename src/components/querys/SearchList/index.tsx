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
} from './styled';

import Fuse from 'fuse.js';
import { fuzePlaceListOptions } from '../../../consntants/fuzeOptions';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import { IoSearch } from 'react-icons/io5';

import { IPlace, PlaceListType } from './types';

const ListSearch = ({ places }: PlaceListType) => {
	/*	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(places, fuzePlaceListOptions);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: placeList.filter((place) => place.featured);

		setPlaceList(filteredList as [IPlace]);
	};*/

	return (
		<Container>
			<BoxSearch>
				<IoSearch />
				<InputSearch placeholder="Buscar excursiones" />
			</BoxSearch>

			<BoxItemList>
				{places.map((place, index) => {
					return (
						<ItemList key={index}>
							<BoxImage></BoxImage>
							<Description>
								<Title>{place.name}</Title>
								<BoxSubtitle>
									<SubTitle>{place.province}</SubTitle>-
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
