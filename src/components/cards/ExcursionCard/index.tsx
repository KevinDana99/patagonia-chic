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
	NumberReserveWeek,
	TextVector,
	TextVectorDay,
	TextVectorMonth,
} from './styled';
import { ExcursionCardType } from './types';

const TourCard = ({
	coverImage,
	title,
	subPrice,
	price,
	subTitle,
	currency,
	isAddedToCart = false,
	isAvaiable,
	date,
	texts,
	bookingsThisWeekCount,
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
									<VectorCard color={isAddedToCart ? ActiveTheme : '#1079E3'} />
									<TextVector>
										<TextVectorDay>
											<Text color="white">{date?.day}</Text>
										</TextVectorDay>
										<TextVectorMonth>
											<Text color="white">{date?.month}</Text>
										</TextVectorMonth>
									</TextVector>
								</ContainerVector>
							)}

							{!isAvaiable && (
								<ContainerVector>
									<VectorCard color={isAddedToCart ? ActiveTheme : '#1079E3'} />
									<TextVector>
										<TextVectorDay>
											<Text color="white">{date?.day}</Text>
										</TextVectorDay>
										<TextVectorMonth>
											<Text color="white">{date?.month}</Text>
										</TextVectorMonth>
									</TextVector>
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
											{texts.detailsAddedText}
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
										title={
											texts.buttonAddedToCartText
												? texts.buttonAddedToCartText
												: ''
										}
										color={'#3b3b3b'}
									/>
								)}
								{!isAddedToCart && !isAvaiable && (
									<ButtonReserve
										title={
											texts.buttonDefaultText ? texts.buttonDefaultText : ''
										}
									/>
								)}
								{!isAddedToCart && isAvaiable && (
									<ActiveButton
										title={
											texts.buttonAvaiableText ? texts.buttonAvaiableText : ''
										}
									/>
								)}
							</ButtonContainer>
						</BoxReserve>
					</Description>
				</>
			</Card>

			<OptionContainer>
				{bookingsThisWeekCount && texts.bookingsThisWeekText && (
					<BoxOption>
						<CustomIcon name="group-circle" />
						<Option>
							<NumberReserveWeek>
								<Text weight={'bold'}>{bookingsThisWeekCount.toString()}</Text>
							</NumberReserveWeek>
							<Text>{texts.bookingsThisWeekText}</Text>
						</Option>
					</BoxOption>
				)}

				{texts.lastBookingTimeText && (
					<BoxOption>
						<CustomIcon name="ray-circle" />
						<Option>
							<Text size={12}>{texts.lastBookingTimeText}</Text>
						</Option>
					</BoxOption>
				)}
			</OptionContainer>
		</Container>
	);
};

export default TourCard;
