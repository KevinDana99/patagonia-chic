import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

import { CalendarInput } from './components/CalendarInput/CalendarInput';
import {
	SearchQueryContainer,
	SearchQueryBarContainer,
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
	ContainerModal,
	PlacesListContainer,
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

	useOutsideClick([locationInputRef, locationListContainerRef], () =>
		setShowLocationsListContainer(false)
	);

	const [modal, setModal] = useState(false);
	const [showPlaceList, setShowPlaceList] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [showMobilePlaceList, setShowMobilePlaceList] = useState(false);
	const [calendarFocusedInput, setCalendarFocusedInput] = useState('startDate');

	const [locationSearchText, setLocationSearchText] = useState('');

	const handleLocationSelect = (selectedItemId: string) => {
		const selectedLocationItem = locationsList.find(
			(item) => item.id === selectedItemId
		);
		setQuerySelectedData({
			...querySelectedData,
			location: selectedLocationItem ?? null,
		});
		setLocationSearchText(selectedLocationItem?.name ?? '');
		setShowLocationsListContainer(false);
		locationInputRef?.current?.blur();
	};

	const isMobile = useMediaQuery('(max-width: 850px)');

	return (
		<SearchQueryContainer>
			<SearchQueryBarContainer>
				{showLocations && (
					<SearchQueryInput
						ref={locationInputRef}
						label={texts.labelPlace}
						placeholder={texts.placeholderPlace}
						inputTextValue={locationSearchText}
						onInputTextChange={setLocationSearchText}
						onClearFieldClicked={() =>
							setQuerySelectedData({
								...querySelectedData,
								location: null,
							})
						}
						onFocusChange={(isFocused) =>
							isFocused && setShowLocationsListContainer(true)
						}
					/>
				)}

				{/* <CalendarInput
					disableSearch={disableSearch}
					labels={[texts.labelStartDate, texts.labelEndDate]}
					titles={[texts.placeholderDate, texts.placeholderDate]}
					values={data}
					clearData={clearDates}
					outsideClick={() => setShowCalendar(false)}
					calendarFocusedInput={calendarFocusedInput}
					showCalendar={showCalendar}
					isMobile={isMobile}
					setDates={setData}
					data={data}
					setFocused={setCalendarFocusedInput}
					closeCalendar={() => setShowCalendar(false)}
					openCalendar={() => {
						setShowPlaceList(false);
						setShowCalendar(true);
					}}
				></CalendarInput> */}
				<ButtonContainer>
					<ButtonSearch
						title={!isMobile ? texts.titleSearchButton : ''}
						IconComponent={SearchIcon}
						onClick={() => {
							console.log('btn clicked');
						}}
					/>
				</ButtonContainer>
			</SearchQueryBarContainer>

			<PlacesListContainer
				ref={locationListContainerRef}
				visible={showLocationsListContainer}
			>
				<SearchList
					searchBar={false}
					list={locationsList}
					onItemSelected={(selectedItem) =>
						handleLocationSelect(selectedItem.id)
					}
					searchPlaceholder={texts.placeholderPlace}
					searchText={locationSearchText}
					onSearchChange={setLocationSearchText}
					edgesItemsAddedPadding={10}
					emptyStateText="No encontramos este destino, pero te recomendamos..."
				/>
			</PlacesListContainer>

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
