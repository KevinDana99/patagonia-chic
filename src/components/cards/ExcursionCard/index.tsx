import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import {
	Card,
	ContainerImage,
	VectorBlueTop,
	Description,
	BoxTitle,
	Title,
	SubTitle,
	BoxReserve,
	BoxPrice,
	Price,
	SubPrice,
	ButtonReserve,
	Currency,
} from './styled';
import { ExcursionCardType } from './types';

const Excursion = ({
	coverImage,
	title,
	subPrice,
	price,
	subTitle,
	currency,
}: ExcursionCardType) => {
	return (
		<Card hover={true}>
			<>
				{coverImage && (
					<ContainerImage
						coverImage={typeof coverImage === 'string' ? coverImage : undefined}
					>
						{typeof coverImage !== 'string' && coverImage}

						{<VectorBlueTop />}
					</ContainerImage>
				)}
				<Description>
					<BoxTitle>
						<SubTitle>{subTitle}</SubTitle>
						<Title>{title}</Title>
					</BoxTitle>
					<hr color="#D7D5D5" />
					<BoxReserve>
						<BoxPrice>
							<Price>
								{price} <Currency>{currency}</Currency>
							</Price>
							<SubPrice>
								{subPrice}
								<Currency>{currency}</Currency>
							</SubPrice>
						</BoxPrice>
						<ButtonReserve title="Reservar" />
					</BoxReserve>
				</Description>
			</>
		</Card>
	);
};

const ExcursionCard = withFontStyles(Excursion);

export default ExcursionCard;
