import React from 'react';

import CardDescription from './components/CardDescription';
import CardImage from './components/CardImage';
import CardOptions from './components/CardOptions';
import { Card, Container } from './styled';
import { ExcursionCardType } from './types';

const TourCard = ({
	coverImage,
	imageList,
	title,
	subPrice,
	price,
	subTitle,
	currencySymbol,
	currencyCode,
	isAddedToCart = false,
	isAvailable,
	date,
	texts,
	bookingsThisWeekCount,
	onViewCart,
	onAddedToCart,
	onViewDetails,
	className,
	onClickCard,
}: ExcursionCardType) => {
	return (
		<Container>
			<Card hover={true} className={className} onClick={onClickCard}>
				<>
					<CardImage
						coverImage={coverImage}
						imageList={imageList}
						date={date}
						isAvailable={isAvailable}
						isAddedToCart={isAddedToCart}
					/>
					<CardDescription
						title={title}
						subTitle={subTitle}
						isAddedToCart={isAddedToCart}
						isAvailable={isAvailable}
						currencySymbol={currencySymbol}
						currencyCode={currencyCode}
						price={price}
						subPrice={subPrice}
						texts={texts}
						onViewCart={onViewCart}
						onViewDetails={onViewDetails}
						onAddedToCart={onAddedToCart}
					/>
				</>
			</Card>
			<CardOptions
				bookingsThisWeekCount={bookingsThisWeekCount}
				texts={texts}
			/>
		</Container>
	);
};

export default TourCard;
