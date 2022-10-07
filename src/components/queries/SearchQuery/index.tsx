import React, { useEffect, useCallback, useState } from 'react';

import { CalendarInput } from './components/CalendarInput/CalendarInput';
import {
	SearchQueryContainer,
	SearchQueryBarContainer,
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
	ContainerModal,
} from './styled';
import { SearchQueryType, StateSearchQueryType } from './types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PlacesSearchBarInput from './components/SearchQueryInput';
import Fuse from 'fuse.js';
import fusePlaceListOptions from '../../../constants/fuseOptions.json';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Modal from '../../modals/Modal';
import CalendarMobile from './components/CalendarMobile';
import SearchList from '../../lists/SearchList';

const SearchQuery = ({
	list,
	onQuerySubmit,
	showLocations = true,
	texts,
}: SearchQueryType) => {
	const [data, setData] = useState<StateSearchQueryType>({
		place: null,
		startDate: null,
		endDate: null,
	});
	const [placeList, setPlaceList] = useState(list);
	const [modal, setModal] = useState(false);
	const [showPlaceList, setShowPlaceList] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [showMobilePlaceList, setShowMobilePlaceList] = useState(false);
	const [calendarFocusedInput, setCalendarFocusedInput] = useState('startDate');
	const [disableSearch, setDisableSearch] = useState({
		place: false,
		startDate: false,
		endDate: false,
	});

	const [locationSearchText, setLocationSearchText] = useState('');

	const clearDates = () => {
		setData({ ...data, startDate: null, endDate: null });
		setShowCalendar(true);
		setCalendarFocusedInput('startDate');
	};

	const isMobile = useMediaQuery('(max-width: 850px)');

	const validateSearch = () => {
		if (
			data?.place?.name == null ||
			data?.place?.name == '' ||
			data?.startDate?.name == null ||
			data?.startDate?.name == '' ||
			data?.endDate?.name == null ||
			data?.endDate?.name == ''
		) {
			setDisableSearch({
				...disableSearch,
				place: !data.place?.name ? true : false,
				startDate: !data.startDate?.name ? true : false,
				endDate: !data.endDate?.name ? true : false,
			});

			return false;
		} else {
			return true;
		}
	};

	const resetSearchStatus = useCallback(
		(disableSearchKey: string) => {
			disableSearch[`${disableSearchKey}` as keyof typeof data] !== false &&
				setDisableSearch({
					...disableSearch,
					[disableSearchKey]: false,
				});
		},
		[disableSearch]
	);

	useEffect(() => {
		resetSearchStatus('startDate');
	}, [data.startDate, resetSearchStatus]);
	useEffect(() => {
		resetSearchStatus('endDate');
	}, [data.endDate, resetSearchStatus]);
	useEffect(() => {
		resetSearchStatus('place');
	}, [data.place, resetSearchStatus]);

	return (
		<>
			<SearchQueryContainer>
				<SearchQueryBarContainer>
					{showLocations && (
						<PlacesSearchBarInput
							label={texts.labelPlace}
							placeholder={texts.placeholderPlace}
							inputTextValue={locationSearchText}
							onInputTextChange={setLocationSearchText}
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
								const validate = validateSearch();
								validate && onQuerySubmit(data);
							}}
						/>
					</ButtonContainer>
				</SearchQueryBarContainer>
			</SearchQueryContainer>

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
		</>
	);
};

export default SearchQuery;
