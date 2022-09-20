import React from 'react';
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
	ButtonContainer,
} from './styled';
import { ExcursionCardType } from './types';

const ExcursionCard = ({
	coverImage,
	title,
	subPrice,
	price,
	subTitle,
	currency,
	isAddedToCart = false,
	isAvaiable,
	date,
	options,
}: ExcursionCardType) => {
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

							{isAvaiable && isAddedToCart && (
								<ContainerVector>
									<VectorCard
										text={date}
										color={isAddedToCart ? ActiveTheme : '#1079E3'}
									/>
								</ContainerVector>
							)}

							{!isAvaiable && (
								<ContainerVector>
									<VectorCard
										text={date}
										color={isAddedToCart ? ActiveTheme : '#1079E3'}
									/>
								</ContainerVector>
							)}
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
								!isAvaiable && (
									<BoxPrice>
										<Price>
											{price} <Currency>{currency}</Currency>
										</Price>
										<SubPrice>
											{subPrice}
											<Currency>{currency}</Currency>
										</SubPrice>
									</BoxPrice>
								)
							)}

							<ButtonContainer>
								{isAddedToCart && <ActiveButton title="Ver carrito" />}
								{!isAddedToCart && !isAvaiable && (
									<ButtonReserve title="Reservar" />
								)}
								{!isAddedToCart && isAvaiable && (
									<ActiveButton title="Ver detalle" />
								)}
							</ButtonContainer>
						</BoxReserve>
					</Description>
				</>
			</Card>

			<OptionContainer>
				{options?.countReservesWeek && (
					<BoxOption>
						<CustomIcon name="group-circle" />
						<Option> {options.countReservesWeek}</Option>
					</BoxOption>
				)}

				{options?.timeLatestReserve && (
					<BoxOption>
						<CustomIcon name="ray-circle" />
						<Option>{options.timeLatestReserve}</Option>
					</BoxOption>
				)}
			</OptionContainer>
		</Container>
	);
};

export default ExcursionCard;
