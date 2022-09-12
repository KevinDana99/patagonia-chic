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
	DescriptionActive,
	Details,
	Container,
	OptionContainer,
	Option,
	BoxOption,
} from './styled';
import { ExcursionCardType } from './types';

const Excursion = ({
	coverImage,
	title,
	subPrice,
	price,
	subTitle,
	currency,
	isAddedToCart = false,
	date,
	options,
}: ExcursionCardType) => {
	const getTimeLatestReserve = () => {
		const date = new Date().getTime();
		const latestReserve = options?.timeLatestReserve
			? options?.timeLatestReserve.getTime()
			: date;
		const diff = date - latestReserve;
		const hours = Math.round(diff / (1000 * 60 * 60));
		const min = Math.round(diff / (1000 * 60));

		return min > 60 ? { time: hours, unit: 'H' } : { time: min, unit: 'M' };
	};

	const reserveTime = getTimeLatestReserve();
	return (
		<Container>
			<Card hover={true}>
				<>
					{coverImage && (
						<ContainerImage
							coverImage={
								typeof coverImage === 'string' ? coverImage : undefined
							}
						>
							{typeof coverImage !== 'string' && coverImage}

							{
								<ContainerVector>
									<VectorCard
										text={date}
										color={isAddedToCart ? ActiveTheme : '#1079E3'}
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
							{isAddedToCart ? (
								<DescriptionActive>
									<CustomIcon
										name="check-circle"
										color={ActiveTheme}
										size={20}
									/>
									<Details>Agregaste esta excursion a tu carrito</Details>
								</DescriptionActive>
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

							{isAddedToCart ? (
								<ActiveButton title="Ver carrito" />
							) : (
								<ButtonReserve title="Reservar" />
							)}
						</BoxReserve>
					</Description>
				</>
			</Card>

			<OptionContainer>
				{options?.countReservesWeek && (
					<BoxOption>
						<CustomIcon name="group-circle" />
						<Option>
							{<b>{options.countReservesWeek}</b>} veces reservado la ultima
							semana
						</Option>
					</BoxOption>
				)}

				{options?.timeLatestReserve && (
					<BoxOption>
						<CustomIcon name="ray-circle" />
						<Option>
							Reservado hace{' '}
							{reserveTime.time +
								(reserveTime.unit == 'H' ? ' horas ' : ' minutos ')}
							atras
						</Option>
					</BoxOption>
				)}
			</OptionContainer>
		</Container>
	);
};

const ExcursionCard = withFontStyles(Excursion);

export default ExcursionCard;
