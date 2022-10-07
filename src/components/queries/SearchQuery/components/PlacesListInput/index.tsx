import React, { useRef } from 'react';
import { CloseIcon, Divider, Input, Label, OptionContent } from '../../styled';
import { PlaceListInputType } from '../../types';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { OptionContainerPlaceList, PlaceListContainer } from './styled';
import SearchList from '../../../../lists/SearchList';
import Text from '../../../../texts/Text';

const PlacesListInput = ({
	label,
	placeholder,
	onClick,
	values,
	clearData,
	isFocused,
	inputOnChange,
	outsideClick,
	placeList,
	setPlaceData,
	isMobile,
	openCalendar,
	closeList,
	showPlaceList,
	disableSearch,
	showCalendar,
}: PlaceListInputType) => {
	const containerRef = useRef(null);
	useOutsideClick(containerRef, outsideClick);

	return (
		<OptionContainerPlaceList
			onClick={onClick}
			isFocused={isFocused}
			ref={containerRef}
		>
			<OptionContent>
				<Label>
					<Text size={12} weight="semi-bold">
						{label}
					</Text>
				</Label>
				<Input
					disableSearch={disableSearch}
					type="text"
					placeholder={placeholder}
					onChange={inputOnChange}
					value={values?.place?.name}
				/>
			</OptionContent>
			{values?.place?.name && <CloseIcon onClick={clearData} />}
			{!isMobile && showPlaceList && !showCalendar && (
				<PlaceListContainer>
					<SearchList
						list={placeList}
						onChangeSelect={setPlaceData}
						selectedAction={(item) => {
							setPlaceData({ ...values, place: item });
							closeList && closeList();
							openCalendar();
						}}
					/>
				</PlaceListContainer>
			)}

			<Divider />
		</OptionContainerPlaceList>
	);
};

export default PlacesListInput;
