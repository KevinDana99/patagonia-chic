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
	DatesPropsType,
} from './types';
import Modal from '../../../../modals/Modal';

const QuerySelectorsContext = createContext<QuerySelectorsContextType>(
	{} as QuerySelectorsContextType
);

export default function QuerySelectors({
	renderAsModal: renderAsModalProp,
	showLocations: showLocationProp,
	setShowLocations,
	showDates: showDateProp,
	children,
}: QuerySelectorsPropsType) {
	const [showLocationSelector, setShowLocationSelector] =
		useState(showLocationProp);
	const [showDatesSelector, setShowDatesSelector] = useState(showDateProp);
	const [renderAsModal, setRenderAsModal] = useState(renderAsModalProp);

	useEffect(() => {
		setShowLocationSelector(showLocationProp);
	}, [showLocationProp]);

	useEffect(() => {
		setShowDatesSelector(showDateProp);
	}, [showDateProp]);

	useEffect(() => {
		setRenderAsModal(renderAsModalProp);
	}, [renderAsModalProp]);

	const handleModalClose = () => {
		setShowLocations(false);
		setShowDatesSelector(false);
	};

	console.log('showLocationSelector', showLocationSelector);
	console.log('showLocationProp', showLocationProp);

	return (
		<QuerySelectorsContext.Provider
			value={{
				showLocationSelector,
				showDatesSelector,
				renderAsModal,
				setShowLocationSelector: setShowLocations,
				setShowDatesSelector,
			}}
		>
			{renderAsModal ? (
				<Modal
					visible={showLocationSelector}
					closeAction={handleModalClose}
					closeOnTouchOutside
					animated
				>
					{children}
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
	const { showLocationSelector, renderAsModal } = useContext(
		QuerySelectorsContext
	);

	if (!showLocationSelector) return <></>;

	return (
		<div ref={ref}>
			{renderAsModal ? (
				children
			) : (
				<>
					<PlacesListContainer>{children}</PlacesListContainer>
				</>
			)}
		</div>
	);
}

function Dates({ children }: DatesPropsType) {
	return <>{children}</>;
}

QuerySelectors.Location = React.forwardRef<HTMLDivElement, LocationPropsType>(
	Location
);
QuerySelectors.Dates = Dates;
