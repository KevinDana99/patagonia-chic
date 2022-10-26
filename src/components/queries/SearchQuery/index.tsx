import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

import { CalendarInput } from './components/CalendarInput/CalendarInput';
import {
	SearchQueryContainer,
	SearchQueryBarContainer,
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
} from './styled';
import { SearchQueryPropsType, QuerySelectedDataType } from './types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import SearchQueryInput from './components/SearchQueryInput';
import Fuse from 'fuse.js';
import fusePlaceListOptions from '../../../constants/fuseOptions.json';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Modal from '../../modals/Modal';
import CalendarMobile from './components/CalendarMobile';
import SearchList from '../../lists/SearchList';
import QuerySelectors from './components/QuerySelectors';
import { size } from '../../../constants/devicesSizes';
import Calendar from '../../calendars/Calendar';

const SearchQuery = ({
	locationsList,
	onQuerySubmit,
	showLocations = true,
	texts,
}: SearchQueryPropsType) => {
	const [querySelectedData, setQuerySelectedData] =
		useState<QuerySelectedDataType>({
			location: null,
			startDate: null,
			endDate: null,
		});

	const [showLocationsListContainer, setShowLocationsListContainer] =
		useState(false);

	const locationInputRef = useRef<HTMLInputElement>(null);
	const locationListContainerRef = useRef(null);

	const [locationSearchText, setLocationSearchText] = useState('');
	const [locationShowFullList, setLocationShowFullList] = useState(false);

	const isTablet = useMediaQuery(`(max-width: ${size.tabletL})`);
	const isMobile = useMediaQuery(`(max-width: ${size.tablet})`);

	useOutsideClick([locationInputRef, locationListContainerRef], () => {
		if (!isTablet || !isMobile) {
			setShowLocationsListContainer(false);
			if (locationSearchText.length === 0) {
				setQuerySelectedData({
					...querySelectedData,
					location: null,
				});
			}
			setLocationSearchText(querySelectedData.location?.name ?? '');
		}
	});

	const handleLocationSelect = (selectedItemId: string) => {
		const selectedLocationItem = locationsList.find(
			(item) => item.id === selectedItemId
		);
		setQuerySelectedData({
			...querySelectedData,
			location: selectedLocationItem ?? null,
		});
		setShowLocationsListContainer(false);
		locationInputRef?.current?.blur();
		setLocationSearchText(selectedLocationItem?.name ?? '');
		setLocationShowFullList(true);
	};

	const handleLocationInputChange = (newText: string) => {
		setLocationSearchText(newText);
		setLocationShowFullList(false);
	};

	return (
		<SearchQueryContainer>
			<SearchQueryBarContainer>
				{showLocations && (
					<SearchQueryInput
						ref={locationInputRef}
						label={texts.labelPlace}
						placeholder={texts.placeholderPlace}
						inputTextValue={locationSearchText}
						onInputTextChange={handleLocationInputChange}
						onClearFieldClicked={() =>
							setQuerySelectedData({
								...querySelectedData,
								location: null,
							})
						}
						onFocusChange={(isFocused) =>
							isFocused && setShowLocationsListContainer(true)
						}
						onlyClick={isTablet}
						onClick={() => isTablet && setShowLocationsListContainer(true)}
					/>
				)}
				{!isMobile && (
					<>
						<SearchQueryInput
							label={texts.labelStartDate}
							placeholder={texts.placeholderDate}
						/>
						<SearchQueryInput
							label={texts.labelEndDate}
							placeholder={texts.placeholderDate}
						/>
					</>
				)}
				<ButtonContainer>
					<ButtonSearch
						title={!isTablet ? texts.titleSearchButton : ''}
						IconComponent={SearchIcon}
						onClick={() => {
							console.log('btn clicked');
						}}
					/>
				</ButtonContainer>
			</SearchQueryBarContainer>

			<QuerySelectors
				renderAsModal={isTablet}
				showLocations={showLocationsListContainer}
				setShowLocations={setShowLocationsListContainer}
				showDates={false}
			>
				<QuerySelectors.Location ref={locationListContainerRef}>
					<SearchList
						list={locationsList}
						onItemSelected={(selectedItem) =>
							handleLocationSelect(selectedItem.id)
						}
						configs={{
							showSearchBar: isTablet,
							focusOnRender: isTablet,
							edgesItemsAddedPadding: 10,
							horizontalPadding: isTablet && !isMobile ? 40 : 20,
						}}
						searchPlaceholder={texts.placeholderPlace}
						searchText={locationShowFullList ? '' : locationSearchText}
						emptyStateText="No encontramos este destino, pero te recomendamos..."
					/>
				</QuerySelectors.Location>
				<QuerySelectors.Dates>
					<Calendar />
				</QuerySelectors.Dates>
			</QuerySelectors>

			{/* <Modal
				visible={isMobile && modal ? true : false}
				closeAction={() => setModal(false)}
				closeOnTouchOutside={true}
				animated={true}
			>
				<ContainerModal>
					{showMobilePlaceList ? (
						<SearchList
							search={true}
							list={placeList}
							onChangeSelect={setData}
							selectedAction={(item) => {
								setData({ ...data, place: item });
								setShowMobilePlaceList(false);
							}}
							searchPlaceHolder={texts.placeholderPlace}
						/>
					) : (
						<CalendarMobile
							closeList={() => {
								setShowMobilePlaceList(false);
							}}
							setDates={setData}
							data={data}
							setCalendarFocusedInput={setCalendarFocusedInput}
							calendarFocusedInput={calendarFocusedInput}
							isMobile={isMobile}
							sendData={() => {
								const validate = validateSearch();
								validate && onQuerySubmit(data);
							}}
							labelEndDate={texts.labelEndDate}
							labelPlace={texts.labelPlace}
							labelStartDate={texts.labelStartDate}
							titleSearchButton={texts.titleSearchButton}
						/>
					)}
				</ContainerModal>
			</Modal> */}
		</SearchQueryContainer>
	);
};

export default SearchQuery;
