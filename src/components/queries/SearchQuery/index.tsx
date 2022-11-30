import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import moment from 'moment';

import {
	SearchQueryContainer,
	SearchQueryBarContainer,
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
} from './styled';
import {
	SearchQueryPropsType,
	QuerySelectedDataType,
	CurrentSelectorStateType,
} from './types';
import SearchQueryInput from './components/SearchQueryInput';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SearchList from '../../lists/SearchList';
import QuerySelectors from './components/QuerySelectors';
import { size } from '../../../constants/devicesSizes';
import Calendar from '../../calendars/Calendar';

export const getFormattedDate = (date: Date) => {
	let formattedDate = moment(date).format('MMMM, DD');
	formattedDate =
		formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
	return formattedDate;
};

const SearchQuery = ({
	locationsList,
	onQuerySubmit,
	showLocations = true,
	texts,
	locale = 'es',
}: SearchQueryPropsType) => {
	const [querySelectedData, setQuerySelectedData] =
		useState<QuerySelectedDataType>({
			location: null,
			startDate: null,
			endDate: null,
		});

	moment.locale(locale);

	const [currentSelector, setCurrentSelector] =
		useState<CurrentSelectorStateType>('none');

	const locationInputRef = useRef<HTMLInputElement>(null);
	const locationListContainerRef = useRef(null);

	const dateStartInputRef = useRef<HTMLInputElement>(null);
	const dateEndInputRef = useRef<HTMLInputElement>(null);
	const DatesRangePickerContainerRef = useRef(null);

	const [locationSearchText, setLocationSearchText] = useState('');
	const [locationShowFullList, setLocationShowFullList] = useState(false);

	const isTablet = useMediaQuery(`(max-width: ${size.tabletL})`);
	const isMobile = useMediaQuery(`(max-width: ${size.tablet})`);

	useOutsideClick([locationInputRef, locationListContainerRef], () => {
		if (!isTablet || !isMobile) {
			setCurrentSelector('none');
			if (locationSearchText.length === 0) {
				setQuerySelectedData({
					...querySelectedData,
					location: null,
				});
			}
			setLocationSearchText(querySelectedData.location?.name ?? '');
		}
	});

	useOutsideClick(
		[DatesRangePickerContainerRef, dateStartInputRef, dateEndInputRef],
		() => {
			setCurrentSelector('none');
		}
	);

	const handleLocationSelect = (selectedItemId: string) => {
		const selectedLocationItem = locationsList.find(
			(item) => item.id === selectedItemId
		);
		setQuerySelectedData({
			...querySelectedData,
			location: selectedLocationItem ?? null,
		});
		setCurrentSelector(
			!!querySelectedData.startDate && !isMobile ? 'none' : 'dates/start'
		);

		locationInputRef?.current?.blur();
		setLocationSearchText(selectedLocationItem?.name ?? '');
		setLocationShowFullList(true);
	};

	const handleLocationInputChange = (newText: string) => {
		setLocationSearchText(newText);
		setLocationShowFullList(false);
	};

	const handleEndDateSelected = (selectedDate: Date) => {
		if (
			querySelectedData.startDate &&
			querySelectedData.startDate > selectedDate
		) {
			setQuerySelectedData({
				...querySelectedData,
				startDate: selectedDate,
				endDate: querySelectedData.startDate,
			});
		} else {
			setQuerySelectedData({
				...querySelectedData,
				endDate: selectedDate,
			});
		}
		!isTablet && setCurrentSelector('none');
	};

	const handleStartDateSelected = (selectedDate: Date) => {
		if (currentSelector === 'dates/end') {
			handleEndDateSelected(selectedDate);
		} else {
			setQuerySelectedData({
				...querySelectedData,
				endDate: null,
				startDate: selectedDate,
			});
			setCurrentSelector('dates/end');
		}
	};

	const handleSubmit = () => {
		const { location, startDate, endDate } = querySelectedData;

		if ((showLocations ? location : true) && startDate && endDate) {
			onQuerySubmit(querySelectedData);
			setCurrentSelector('none');
		} else {
			if (!isMobile) {
				if (showLocations && !location) setCurrentSelector('location');
				else if (!startDate) setCurrentSelector('dates/start');
				else setCurrentSelector('dates/end');
			} else {
				setCurrentSelector('location');
			}
		}
	};

	return (
		<SearchQueryContainer>
			<SearchQueryBarContainer>
				{showLocations && (
					<SearchQueryInput
						ref={locationInputRef}
						label={texts.labelLocation}
						placeholder={texts.placeholderLocation}
						inputTextValue={locationSearchText}
						onInputTextChange={handleLocationInputChange}
						onClearFieldClicked={() =>
							setQuerySelectedData({
								...querySelectedData,
								location: null,
							})
						}
						onFocusChange={(isFocused) =>
							isFocused && setCurrentSelector('location')
						}
						onlyClick={isTablet}
						onClick={() => isTablet && setCurrentSelector('location')}
					/>
				)}
				{!isMobile && (
					<>
						<SearchQueryInput
							ref={dateStartInputRef}
							inputTextValue={
								querySelectedData.startDate
									? getFormattedDate(querySelectedData.startDate)
									: ''
							}
							label={texts.labelStartDate}
							onClearFieldClicked={() => {
								setQuerySelectedData({
									...querySelectedData,
									startDate: null,
									endDate: null,
								});
							}}
							placeholder={texts.placeholderDate}
							onlyClick
							onClick={() => setCurrentSelector('dates/start')}
							isFocused={currentSelector === 'dates/start'}
						/>
						<SearchQueryInput
							ref={dateEndInputRef}
							inputTextValue={
								querySelectedData.endDate
									? getFormattedDate(querySelectedData.endDate)
									: ''
							}
							onClearFieldClicked={() => {
								setQuerySelectedData({
									...querySelectedData,
									endDate: null,
								});
							}}
							label={texts.labelEndDate}
							placeholder={texts.placeholderDate}
							onClick={() =>
								setCurrentSelector(
									querySelectedData.startDate ? 'dates/end' : 'dates/start'
								)
							}
							onlyClick
							isFocused={currentSelector === 'dates/end'}
						/>
					</>
				)}
				<ButtonContainer>
					<ButtonSearch
						title={!isTablet ? texts.titleSearchButton : ''}
						iconComponent={SearchIcon}
						invertGradient={
							!!querySelectedData.location &&
							!!querySelectedData.startDate &&
							!!querySelectedData.endDate
						}
						onClick={handleSubmit}
					/>
				</ButtonContainer>
			</SearchQueryBarContainer>

			<QuerySelectors
				renderAsModal={isTablet}
				closeAction={() => setCurrentSelector('none')}
				currentSelector={currentSelector}
				querySelectedData={querySelectedData}
				texts={texts}
			>
				<QuerySelectors.Location ref={locationListContainerRef}>
					<SearchList
						list={locationsList}
						onItemSelected={(selectedItem) =>
							handleLocationSelect(selectedItem.id)
						}
						configs={{
							showSearchBar: isTablet,
							focusOnRender: false,
							edgesItemsAddedPadding: 10,
							horizontalPadding: isTablet && !isMobile ? 40 : 20,
						}}
						searchPlaceholder={texts.placeholderLocation}
						searchText={locationShowFullList ? '' : locationSearchText}
						texts={texts}
					/>
				</QuerySelectors.Location>
				<QuerySelectors.Dates
					ref={DatesRangePickerContainerRef}
					handleSubmit={handleSubmit}
				>
					<Calendar
						doubleCalendar={!isTablet}
						range
						onRangeStartDateSelected={handleStartDateSelected}
						onRangeEndDateSelected={handleEndDateSelected}
						width="100%"
						value={
							currentSelector === 'dates/start' &&
							!querySelectedData.endDate &&
							querySelectedData.startDate
								? [querySelectedData.startDate, querySelectedData.startDate]
								: querySelectedData.startDate && [
										querySelectedData.startDate,
										querySelectedData.endDate,
								  ]
						}
						locale={locale}
					/>
				</QuerySelectors.Dates>
			</QuerySelectors>
		</SearchQueryContainer>
	);
};

export default SearchQuery;
