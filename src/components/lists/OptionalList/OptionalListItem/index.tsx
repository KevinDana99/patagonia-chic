import React, { useEffect, useState } from 'react';
import CounterSelect from '../../../forms/CounterSelect';
import { SecondaryButton } from '../../../index';
import Text from '../../../texts/Text';
import {
	CheckIcon,
	Container,
	Description,
	Footer,
	InformationButtonContainer,
	InputContainer,
	ItemContent,
	Label,
	MoreInformation,
	Price,
	PriceContainer,
	PriceDescription,
	Title,
} from './styled';
import { OptionalsListItemType } from './types';

const OptionalListItem = ({
	id,
	title,
	description,
	price,
	priceDescription,
	disabled = false,
	selectedItem,
	texts,
	showCounterSelect,
	addItem,
	resetList,
	moreInformationContent,
	removeItem,
}: OptionalsListItemType) => {
	const [showInformation, setShowInformation] = useState(false);
	const [quantity, setQuantity] = useState(moreInformationContent ? 0 : null);

	const sendItemData = {
		id,
		resetList,
		description,
		price,
		title,
		quantity,
	};

	const triggerSelectedItem = () => {
		if (!selectedItem) {
			setQuantity(1);
			addItem(sendItemData);
		} else {
			removeItem(sendItemData);
		}
	};

	useEffect(() => {
		!selectedItem && setQuantity(0);
	}, [selectedItem]);

	return (
		<Container
			className={id}
			disabled={disabled}
			onClick={() => triggerSelectedItem()}
		>
			<ItemContent>
				<InputContainer selected={selectedItem}>
					{selectedItem && <CheckIcon size={20} selected={selectedItem} />}
				</InputContainer>
				<Label>
					<Title>
						<Text size={16} weight={'medium'}>
							{title}
						</Text>
					</Title>
					{description && (
						<Description>
							<Text weight={'regular'} size={12}>
								{description}
							</Text>
						</Description>
					)}
					{texts && moreInformationContent && (
						<InformationButtonContainer>
							<SecondaryButton
								title={
									!showInformation
										? texts.moreInformation
										: texts.hideInformation
								}
								onClick={(e) => {
									e.stopPropagation();
									setShowInformation(!showInformation);
								}}
								arrowIconDirection={'right'}
							/>
						</InformationButtonContainer>
					)}
				</Label>
				<PriceContainer>
					{price && (
						<Price>
							<Text size={14} weight={'medium'}>
								{price}
							</Text>
						</Price>
					)}
					{priceDescription && (
						<PriceDescription>
							<Text size={9} weight={'light'}>
								{priceDescription}
							</Text>
						</PriceDescription>
					)}
				</PriceContainer>
			</ItemContent>
			{showCounterSelect && (
				<Footer>
					<CounterSelect
						onChange={(counter) => {
							counter === 0 && removeItem(sendItemData);
							counter === 1 && addItem(sendItemData);
							setQuantity(counter);
						}}
						texts={{ selectQuantity: texts.selectQuantity }}
						value={quantity}
					/>
				</Footer>
			)}
			{moreInformationContent && showInformation && (
				<MoreInformation>{moreInformationContent}</MoreInformation>
			)}
		</Container>
	);
};

export default OptionalListItem;
