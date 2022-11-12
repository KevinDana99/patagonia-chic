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
	ValidationsType,
} from './types';
import SearchQueryInput from './components/SearchQueryInput';
import useMediaQuery from '../../../hooks/useMediaQuery';
import SearchList from '../../lists/SearchList';
import QuerySelectors from './components/QuerySelectors';
import { size } from '../../../constants/devicesSizes';
import Calendar from '../../calendars/Calendar';

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

	const [validations, setValidations] = useState<ValidationsType>({
		location: false,
		startDate: false,
		endDate: false,
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
		setCurrentSelector(!!querySelectedData.startDate ? 'none' : 'dates/start');

		locationInputRef?.current?.blur();
		setLocationSearchText(selectedLocationItem?.name ?? '');
		setLocationShowFullList(true);
	};

	const handleLocationInputChange = (newText: string) => {
		setLocationSearchText(newText);
		setLocationShowFullList(false);
		setValidations({
			...validations,
			location: false,
		});
	};

	const handleStartDateSelected = (selectedDate: Date) => {
		setQuerySelectedData({
			...querySelectedData,
			startDate: selectedDate,
		});
		setValidations({
			...validations,
			startDate: false,
		});
		setCurrentSelector('dates/end');
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
		setCurrentSelector('none');
		setValidations({
			...validations,
			endDate: false,
		});
	};

	const handleSubmit = () => {
		const { location, startDate, endDate } = querySelectedData;

		// validate data
		setValidations({
			location: !location,
			startDate: !startDate,
			endDate: !endDate,
		});

		if (location && startDate && endDate) {
			onQuerySubmit(querySelectedData);
		}
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
							isFocused && setCurrentSelector('location')
						}
						onlyClick={isTablet}
						onClick={() => isTablet && setCurrentSelector('location')}
						isError={validations.location}
					/>
				)}
				{!isMobile && (
					<>
						<SearchQueryInput
							ref={dateStartInputRef}
							inputTextValue={
								querySelectedData.startDate
									? moment(querySelectedData.startDate).format('MMMM, DD')
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
							isError={validations.startDate}
							isFocused={currentSelector === 'dates/start'}
						/>
						<SearchQueryInput
							ref={dateEndInputRef}
							inputTextValue={
								querySelectedData.endDate
									? moment(querySelectedData.endDate).format('MMMM, DD')
									: ''
							}
							onClearFieldClicked={() => {
								setQuerySelectedData({
									...querySelectedData,
									startDate: null,
									endDate: null,
								});
							}}
							label={texts.labelEndDate}
							placeholder={texts.placeholderDate}
							onClick={() => setCurrentSelector('dates/start')}
							onlyClick
							isError={validations.endDate}
							isFocused={currentSelector === 'dates/end'}
						/>
					</>
				)}
				<ButtonContainer>
					<ButtonSearch
						title={!isTablet ? texts.titleSearchButton : ''}
						IconComponent={SearchIcon}
						onClick={handleSubmit}
					/>
				</ButtonContainer>
			</SearchQueryBarContainer>

			<QuerySelectors
				renderAsModal={isTablet}
				closeAction={() => setCurrentSelector('none')}
				currentSelector={currentSelector}
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
				<QuerySelectors.Dates ref={DatesRangePickerContainerRef}>
					<Calendar
						doubleCalendar={!isTablet}
						range
						onRangeStartDateSelected={handleStartDateSelected}
						onRangeEndDateSelected={handleEndDateSelected}
						calendarWidth="100%"
						value={
							querySelectedData.startDate && [
								querySelectedData.startDate,
								querySelectedData.endDate,
							]
						}
					/>
				</QuerySelectors.Dates>
			</QuerySelectors>
		</SearchQueryContainer>
	);
};

export default SearchQuery;
