import React, {
	createContext,
	ForwardedRef,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ContainerModal, PlacesListContainer } from './styled';
import {
	QuerySelectorsPropsType,
	LocationPropsType,
	QuerySelectorsContextType,
} from './types';
import Modal from '../../../../modals/Modal';

const QuerySelectorsContext = createContext<QuerySelectorsContextType>(
	{} as QuerySelectorsContextType
);

export default function QuerySelectors({
	isMobile: isMobileProp,
	showLocation: showLocationProp,
	showDates: showDateProp,
	children,
}: QuerySelectorsPropsType) {
	const [showLocationSelector, setShowLocationSelector] =
		useState(showLocationProp);
	const [showDatesSelector, setShowDatesSelector] = useState(showDateProp);
	const [isMobile, setIsMobile] = useState(isMobileProp);

	useEffect(() => {
		setShowLocationSelector(showLocationProp);
	}, [showLocationProp]);

	useEffect(() => {
		setShowDatesSelector(showDateProp);
	}, [showDateProp]);

	useEffect(() => {
		setIsMobile(isMobileProp);
	}, [isMobileProp]);

	const handleModalClose = () => {
		setShowLocationSelector(false);
		setShowDatesSelector(false);
	};

	console.log('showLocationSelector', showLocationSelector);
	console.log('showLocationProp', showLocationProp);

	return (
		<QuerySelectorsContext.Provider
			value={{
				showLocationSelector,
				showDatesSelector,
				isMobile,
				setShowLocationSelector,
				setShowDatesSelector,
			}}
		>
			{isMobile ? (
				<Modal
					visible={showLocationSelector}
					closeAction={handleModalClose}
					closeOnTouchOutside
					animated
				>
					<ContainerModal>{children}</ContainerModal>
				</Modal>
			) : (
				children
			)}
		</QuerySelectorsContext.Provider>
	);
}

function Location(
	{ children }: LocationPropsType,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { showLocationSelector, isMobile } = useContext(QuerySelectorsContext);

	if (!showLocationSelector) return <></>;

	return (
		<div ref={ref}>
			{isMobile ? (
				children
			) : (
				<>
					<PlacesListContainer>{children}</PlacesListContainer>
				</>
			)}
		</div>
	);
}

function Dates() {
	return <div></div>;
}

QuerySelectors.Location = React.forwardRef<HTMLDivElement, LocationPropsType>(
	Location
);
QuerySelectors.Dates = Dates;
