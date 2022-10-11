import React from 'react';
import CustomIcon from '../../../../graphics/CustomIcon';
import Text from '../../../../texts/Text';
import {
	Description,
	TitleContainer,
	Title,
	SubTitle,
	BoxReserve,
	BoxPrice,
	Price,
	SubPrice,
	ButtonReserve,
	Currency,
	ActiveTheme,
	ActiveButton,
	DescriptionActive,
	Details,
	ButtonContainer,
} from './styled';
import { CardDescriptionType } from './types';

const CardDescription = ({
	title,
	subTitle,
	isAddedToCart,
	isAvailable,
	currencySymbol,
	currencyCode,
	price,
	subPrice,
	texts,
	onViewCart,
	onViewDetails,
	onAddedToCart,
}: CardDescriptionType) => (
	<Description>
		<TitleContainer>
			<SubTitle>
				<Text size={12} weight={'regular'} color={'#888888'}>
					{subTitle}
				</Text>
			</SubTitle>
			<Title>
				<Text size={15} weight={'bold'}>
					{title}
				</Text>
			</Title>
		</TitleContainer>
		<hr color="#D7D5D5" />
		<BoxReserve>
			{isAddedToCart && (
				<DescriptionActive>
					<CustomIcon name="check-circle" color={ActiveTheme} size={20} />
					<Details>
						<Text size={12} weight={'regular'} color={'#888888'}>
							{texts.detailsAddedText}
						</Text>
					</Details>
				</DescriptionActive>
			)}
			{!isAvailable && (
				<BoxPrice>
					<Price>
						<Text size={15} weight={'bold'}>
							{currencySymbol + price}
						</Text>
						<Currency>
							<Text size={10} weight={'bold'}>
								{currencyCode}
							</Text>
						</Currency>
					</Price>
					<SubPrice>
						<Text color="#888888" size={12} weight={'regular'}>
							{currencySymbol + subPrice}
						</Text>

						<Currency>
							<Text color="#888888" size={10}>
								{currencyCode}
							</Text>
						</Currency>
					</SubPrice>
				</BoxPrice>
			)}
			<ButtonContainer>
				{isAddedToCart && (
					<ActiveButton
						title={texts.buttonAddedToCartText ?? ''}
						color={'#3b3b3b'}
						onClick={onViewCart}
					/>
				)}
				{!isAddedToCart && !isAvailable && (
					<ButtonReserve
						title={texts.buttonDefaultText ?? ''}
						onClick={onAddedToCart}
					/>
				)}
				{!isAddedToCart && isAvailable && (
					<ActiveButton
						title={texts.buttonAvaiableText ?? ''}
						onClick={onViewDetails}
					/>
				)}
			</ButtonContainer>
		</BoxReserve>
	</Description>
);

export default CardDescription;
