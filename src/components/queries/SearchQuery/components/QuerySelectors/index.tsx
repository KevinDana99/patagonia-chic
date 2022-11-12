import React, {
	createContext,
	ForwardedRef,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	PlacesListContainer,
	DatesContainer,
	CalendarContainer,
} from './styled';
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
	closeAction,
	currentSelector: currentSelectorProp = 'none',
	renderAsModal: renderAsModalProp,
	children,
}: QuerySelectorsPropsType) {
	const [currentSelector, setCurrentSelector] = useState(currentSelectorProp);
	const [renderAsModal, setRenderAsModal] = useState(renderAsModalProp);

	useEffect(() => {
		setRenderAsModal(renderAsModalProp);
	}, [renderAsModalProp]);

	useEffect(() => {
		setCurrentSelector(currentSelectorProp);
	}, [currentSelectorProp]);

	return (
		<QuerySelectorsContext.Provider
			value={{
				currentSelector,
				renderAsModal,
			}}
		>
			{renderAsModal ? (
				<Modal
					visible={currentSelector !== 'none'}
					closeAction={closeAction}
					closeOnTouchOutside
					animated
				>
					{children}
				</Modal>
			) : (
				currentSelector !== 'none' && children
			)}
		</QuerySelectorsContext.Provider>
	);
}

function Location(
	{ children }: LocationPropsType,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { currentSelector, renderAsModal } = useContext(QuerySelectorsContext);

	if (currentSelector !== 'location') return <></>;

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

function Dates(
	{ children }: DatesPropsType,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { currentSelector, renderAsModal } = useContext(QuerySelectorsContext);

	if (!currentSelector.includes('dates')) return <></>;

	return (
		<div ref={ref}>
			{renderAsModal ? (
				<CalendarContainer>{children}</CalendarContainer>
			) : (
				<>
					<DatesContainer>
						{' '}
						<CalendarContainer>{children}</CalendarContainer>
					</DatesContainer>
				</>
			)}
		</div>
	);
}

QuerySelectors.Location = React.forwardRef<HTMLDivElement, LocationPropsType>(
	Location
);
QuerySelectors.Dates = React.forwardRef<HTMLDivElement, DatesPropsType>(Dates);
