import React, { useEffect, useCallback, useState } from 'react';

import { CalendarInput } from './components/CalendarInput/CalendarInput';
import {
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
	SearchQueryContainer,
	ContainerModal,
} from './styled';
import { IPlace, SearchQueryType, StateSearchQueryType } from './types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PlacesListInput from './components/PlacesListInput';
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

	const clearDates = () => {
		setData({ ...data, startDate: null, endDate: null });
		setShowCalendar(true);
		setCalendarFocusedInput('startDate');
	};

	const filterPlaceList = (query: string) => {
		const fusePlaceList = new Fuse(list, fusePlaceListOptions);
		const filteredResult = fusePlaceList.search(query);
		const filteredList =
			filteredResult.length > 0
				? filteredResult.map((filteredPlace) => filteredPlace.item)
				: placeList.filter((place) => place.featured);

		setPlaceList(filteredList as [IPlace]);
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
				{showLocations && (
					<PlacesListInput
						showCalendar={showCalendar}
						closeModal={() => setModal(false)}
						setDisableSearch={setDisableSearch}
						disableSearch={disableSearch.place}
						label={texts.labelPlace}
						placeholder={texts.placeholderPlace}
						onClick={() => {
							setShowPlaceList(true);
							setShowMobilePlaceList(true);
							isMobile ? setModal(true) : setModal(false);
							setCalendarFocusedInput('startDate');
						}}
						values={data}
						clearData={() => {
							setData({ ...data, place: { name: '' } });
							setShowPlaceList(true);
							setShowCalendar(false);
							setPlaceList(list);
						}}
						isSelected={showPlaceList}
						inputOnChange={(e) => {
							const placeName = e.target.value;
							setData({
								...data,
								place: {
									name: placeName,
								},
							});
							filterPlaceList(placeName);
						}}
						outsideClick={() => setShowPlaceList(false)}
						placeFilter={data.place?.name}
						placeList={placeList}
						setPlaceData={setData}
						isMobile={isMobile}
						openCalendar={() => {
							setShowCalendar(true);
							setCalendarFocusedInput('startDate');
						}}
						closeList={() => {
							setShowPlaceList(false);
						}}
						showPlaceList={showPlaceList}
					/>
				)}

				<CalendarInput
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
				></CalendarInput>
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
			</SearchQueryContainer>

			<Modal
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
			</Modal>
		</>
	);
};

export default SearchQuery;
