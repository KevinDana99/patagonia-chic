import React from 'react';
import CustomIcon from '../../graphics/CustomIcon';
import Text from '../../texts/Text';
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
	buttonDefaultText,
	buttonAddedToCartText,
	buttonAvaiableText,
	detailsAddedText,
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
							<SubTitle>
								<Text size={12.27} weight={'regular'} color={'#888888'}>
									{subTitle}
								</Text>
							</SubTitle>
							<Title>
								<Text size={15.34} weight={'bold'}>
									{title}
								</Text>
							</Title>
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
									<Details>
										<Text size={12.27} weight={'regular'} color={'#888888'}>
											{detailsAddedText}
										</Text>
									</Details>
								</DescriptionActive>
							) : (
								!isAvaiable && (
									<BoxPrice>
										<Price>
											<Text size={15.34} weight={'bold'}>
												{price}
											</Text>
											<Currency>
												<Text size={10} weight={'bold'}>
													{currency}
												</Text>
											</Currency>
										</Price>
										<SubPrice>
											<Text color="#888888" size={12.27} weight={'regular'}>
												{subPrice}
											</Text>

											<Currency>
												<Text color="#888888" size={10}>
													{currency}
												</Text>
											</Currency>
										</SubPrice>
									</BoxPrice>
								)
							)}

							<ButtonContainer>
								{isAddedToCart && (
									<ActiveButton
										title={buttonAddedToCartText}
										color={'#3b3b3b'}
									/>
								)}
								{!isAddedToCart && !isAvaiable && (
									<ButtonReserve title={buttonDefaultText} />
								)}
								{!isAddedToCart && isAvaiable && (
									<ActiveButton title={buttonAvaiableText} color={'#3b3b3b'} />
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
						<Option>
							<Text size={12}>{options.countReservesWeek}</Text>
						</Option>
					</BoxOption>
				)}

				{options?.timeLatestReserve && (
					<BoxOption>
						<CustomIcon name="ray-circle" />
						<Option>
							<Text size={12}>{options.timeLatestReserve}</Text>
						</Option>
					</BoxOption>
				)}
			</OptionContainer>
		</Container>
	);
};

export default ExcursionCard;
