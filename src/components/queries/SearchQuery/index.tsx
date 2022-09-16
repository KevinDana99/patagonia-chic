import React, { useEffect, useRef, useState } from 'react';

import { CalendarInput } from './inputs/CalendarInput/CalendarInput';
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
import { PlaceListInput } from './inputs/PlaceListInput/PlaceListInput';
import Fuse from 'fuse.js';
import fusePlaceListOptions from '../../../constants/fuseOptions.json';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import Modal from '../../modals/Modal';
import CalendarMobile from './mobile/wrappers/CalendarMobile';
import SearchList from '../../lists/SearchList';

const SearchQuery = ({
	list,
	onQuerySubmit,
	showLocations = true,
	labelEndDate,
	labelPlace,
	labelStartDate,
	placeholderDate,
	placeholderPlace,
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
	const [showMobileCalendar, setShowMobileCalendar] = useState(false);
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

	useEffect(() => {
		setDisableSearch({
			...disableSearch,
			startDate: false,
		});
	}, [data.startDate]);

	useEffect(() => {
		setDisableSearch({
			...disableSearch,
			endDate: false,
		});
	}, [data.endDate]);

	useEffect(() => {
		setDisableSearch({
			...disableSearch,
			place: false,
		});
	}, [data.place]);

	return (
		<>
			<SearchQueryContainer>
				{showLocations && (
					<PlaceListInput
						showCalendar={showCalendar}
						closeModal={() => setModal(false)}
						setDisableSearch={setDisableSearch}
						disableSearch={disableSearch.place}
						label={labelPlace}
						placeholder={placeholderPlace}
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
					labels={[labelStartDate, labelEndDate]}
					titles={[placeholderDate, placeholderDate]}
					values={data}
					clearData={clearDates}
					onClick={() => {
						setShowCalendar(true);
						setCalendarFocusedInput('startDate');
						setData({ ...data, startDate: null, endDate: null });
					}}
					outsideClick={() => setShowCalendar(false)}
					calendarFocusedInput={calendarFocusedInput}
					showCalendar={showCalendar}
					isMobile={isMobile}
					closeList={() => {
						setShowCalendar(false);
						setData({ ...data, place: { name: '' } });
					}}
					setDates={setData}
					data={data}
					setFocused={setCalendarFocusedInput}
					closeCalendar={() => setShowCalendar(false)}
					openCalendar={() => {
						setShowPlaceList(false);
						setShowCalendar(true);
					}}
					sendData={() => onQuerySubmit(data)}
				></CalendarInput>
				<ButtonContainer>
					<ButtonSearch
						title={!isMobile ? 'Buscar Excursiones' : ''}
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
								setShowMobileCalendar(true);
							}}
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
						/>
					)}
				</ContainerModal>
			</Modal>
		</>
	);
};

export default withFontStyles(SearchQuery);
