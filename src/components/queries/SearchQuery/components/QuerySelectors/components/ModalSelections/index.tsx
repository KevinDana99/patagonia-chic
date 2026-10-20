import React from 'react';
import Text from '../../../../../../texts/Text';
import { getFormattedDate } from '../../../../';
import { Container, ItemContainer } from './styled';
import { SelectionItemPropsType, ModalSelectionsPropsType } from './types';

const SelectionItem = ({ label, value }: SelectionItemPropsType) => {
	return (
		<ItemContainer>
			<Text size={13} center color="#666" weight="light">
				{label}
			</Text>
			<Text size={14} center color="#222" weight="medium">
				{value || ' - '}
			</Text>
		</ItemContainer>
	);
};

export const ModalSelections = ({
	location,
	startDate,
	endDate,
	texts,
}: ModalSelectionsPropsType) => {
	return (
		<Container>
			<SelectionItem label={texts.modalLabelLocation} value={location?.name} />
			<SelectionItem
				label={texts.modalLabelStartDate}
				value={startDate && getFormattedDate(startDate)}
			/>
			<SelectionItem
				label={texts.modalLabelEndDate}
				value={endDate && getFormattedDate(endDate)}
			/>
		</Container>
	);
};
