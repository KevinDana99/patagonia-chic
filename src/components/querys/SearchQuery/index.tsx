import React, { useEffect, useState } from 'react';

import { CalendarInput } from './inputs/CalendarInput/CalendarInput';
import {
	ButtonContainer,
	ButtonSearch,
	SearchIcon,
	SearchQueryContainer,
} from './styled';
import { IPlace, SearchQueryType, StateSearchQueryType } from './types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { PlaceListInput } from './inputs/PlaceListInput/PlaceListInput';
import Fuse from 'fuse.js';
import { fuzePlaceListOptions } from '../../../consntants/fuzeOptions';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import Modal from '../../../examples/query/modal/Modal';
import PlaceListMobile from './mobile/wrappers/PlaceListMobile';
import PrimaryCalendar from '../../calendars/Calendar';

const SearchQuery = ({
	places,
	onQuerySubmit,
	showLocations = true,
}: SearchQueryType) => {
	const [data, setData] = useState<StateSearchQueryType>({
		place: null,
		startDate: null,
		endDate: null,
	});
	const [placeList, setPlaceList] = useState(places);
	const [modal, setModal] = useState(false);
	const [showPlaceList, setShowPlaceList] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
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
		const fusePlaceList = new Fuse(places, fuzePlaceListOptions);
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
						setDisableSearch={setDisableSearch}
						disableSearch={disableSearch.place}
						label={'Lugar'}
						placeholder={'¿A dónde vas?'}
						onClick={() => {
							setShowPlaceList(true);
							isMobile ? setModal(true) : setModal(false);
							setCalendarFocusedInput('startDate');
						}}
						values={data}
						clearData={() => {
							setData({ ...data, place: { name: '' } });
							setShowPlaceList(true);
							setShowCalendar(false);
							setPlaceList(places);
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
					labels={['Fecha llegada', 'Fecha partida']}
					titles={['Seleccione fecha', 'Seleccione fecha']}
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
					openCalendar={() => setShowCalendar(true)}
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

			<Modal visible={modal} closeModal={() => setModal(false)}>
				<PlaceListMobile
					placeholder={'Busca algo'}
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
					values={data}
					places={places}
					setPlaceData={setData}
					openCalendar={() => setShowCalendar(true)}
					closeList={() => setShowPlaceList(false)}
				/>
			</Modal>
		</>
	);
};

export default withFontStyles(SearchQuery);
