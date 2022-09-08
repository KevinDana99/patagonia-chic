import React from 'react';
import { withFontStyles } from '../../../helpers/hocs/withFontStyles';
import CustomIcon from '../../graphics/CustomIcon';
import {
	Card,
	ContainerImage,
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
	VectorCard,
	ContainerVector,
	ActiveTheme,
	ActiveButton,
} from './styled';
import { ExcursionCardType } from './types';

const Excursion = ({
	coverImage,
	title,
	subPrice,
	price,
	subTitle,
	currency,
	active = false,
	date,
}: ExcursionCardType) => {
	return (
		<Card hover={true}>
			<>
				{coverImage && (
					<ContainerImage
						coverImage={typeof coverImage === 'string' ? coverImage : undefined}
					>
						{typeof coverImage !== 'string' && coverImage}

						{
							<ContainerVector>
								<VectorCard
									text={date}
									color={active ? ActiveTheme : '#1079E3'}
								/>
							</ContainerVector>
						}
					</ContainerImage>
				)}
				<Description>
					<BoxTitle>
						<SubTitle>{subTitle}</SubTitle>
						<Title>{title}</Title>
					</BoxTitle>
					<hr color="#D7D5D5" />
					<BoxReserve>
						{active ? (
							<CustomIcon name="check-circle" color={ActiveTheme} size={20} />
						) : (
							<BoxPrice>
								<Price>
									{price} <Currency>{currency}</Currency>
								</Price>
								<SubPrice>
									{subPrice}
									<Currency>{currency}</Currency>
								</SubPrice>
							</BoxPrice>
						)}

						{active ? (
							<ActiveButton title="Ver carrito" />
						) : (
							<ButtonReserve title="Reservar" />
						)}
					</BoxReserve>
				</Description>
			</>
		</Card>
	);
};

const ExcursionCard = withFontStyles(Excursion);

export default ExcursionCard;
