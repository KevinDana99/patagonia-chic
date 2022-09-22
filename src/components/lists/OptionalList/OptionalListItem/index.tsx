import React, { useEffect, useState } from 'react';
import CounterSelect from '../../../forms/CounterSelect';
import {
	CheckIcon,
	Container,
	Description,
	Footer,
	InformationButton,
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
					<Title>{title}</Title>
					{description && <Description>{description}</Description>}
					{texts && moreInformationContent && (
						<InformationButtonContainer>
							<InformationButton
								title={
									!showInformation
										? texts.moreInformation
										: texts.hideInformation
								}
								onClick={(e) => {
									e.stopPropagation();
									setShowInformation(!showInformation);
								}}
							/>
						</InformationButtonContainer>
					)}
				</Label>
				<PriceContainer>
					{price && <Price>{price}</Price>}
					{priceDescription && (
						<PriceDescription>{priceDescription}</PriceDescription>
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
