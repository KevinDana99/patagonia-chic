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
	ModalSubmitButton,
} from './styled';
import {
	QuerySelectorsPropsType,
	LocationPropsType,
	QuerySelectorsContextType,
	DatesPropsType,
} from './types';
import Modal from '../../../../modals/Modal';
import { ModalSelections } from './components/ModalSelections';
import { SearchIcon } from '../../styled';

const QuerySelectorsContext = createContext<QuerySelectorsContextType>(
	{} as QuerySelectorsContextType
);

export default function QuerySelectors({
	closeAction,
	currentSelector: currentSelectorProp = 'none',
	renderAsModal: renderAsModalProp,
	querySelectedData: querySelectedDataProps,
	children,
	texts,
}: QuerySelectorsPropsType) {
	const [currentSelector, setCurrentSelector] = useState(currentSelectorProp);
	const [renderAsModal, setRenderAsModal] = useState(renderAsModalProp);
	const [querySelectedData, setQuerySelectedData] = useState(
		querySelectedDataProps
	);

	useEffect(() => {
		setRenderAsModal(renderAsModalProp);
	}, [renderAsModalProp]);

	useEffect(() => {
		setCurrentSelector(currentSelectorProp);
	}, [currentSelectorProp]);

	useEffect(() => {
		setQuerySelectedData(querySelectedDataProps);
	}, [querySelectedDataProps]);

	return (
		<QuerySelectorsContext.Provider
			value={{
				currentSelector,
				renderAsModal,
				querySelectedData,
				texts,
			}}
		>
			{renderAsModal ? (
				<Modal
					visible={currentSelector !== 'none'}
					closeAction={closeAction}
					closeOnTouchOutside
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
	{ children, handleSubmit }: DatesPropsType,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { currentSelector, renderAsModal, querySelectedData, texts } =
		useContext(QuerySelectorsContext);

	const { location, startDate, endDate } = querySelectedData;

	if (!currentSelector.includes('dates')) return <></>;

	return (
		<div ref={ref}>
			{renderAsModal ? (
				<>
					<CalendarContainer>{children}</CalendarContainer>
					<ModalSelections {...querySelectedData} texts={texts} />
					<ModalSubmitButton
						title={texts.titleSearchButton}
						IconComponent={SearchIcon}
						onClick={handleSubmit}
						disabled={!location || !startDate || !endDate}
					/>
				</>
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
