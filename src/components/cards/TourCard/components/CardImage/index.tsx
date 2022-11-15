import React from 'react';
import {
	ContainerImage,
	VectorCard,
	ContainerVector,
	ActiveTheme,
	TextVector,
	TextVectorDay,
	TextVectorMonth,
} from './styled';
import Text from '../../../../texts/Text';
import { CardImageTypes } from './types';
import Swiper from '../../../../swipers/Swiper';

const exampleList = [
	{
		alt: 'image1',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image2',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image3',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image4',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image5',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
];
const CardImage = ({
	coverImage,
	imageList,
	date,
	isAvailable,
	isAddedToCart,
}: CardImageTypes) => (
	<>
		{coverImage && (
			<ContainerImage
				coverImage={typeof coverImage === 'string' ? coverImage : undefined}
			>
				{typeof coverImage !== 'string' && coverImage}
			</ContainerImage>
		)}
		{!coverImage && imageList && <Swiper imageList={exampleList} />}

		{!isAvailable && date && (
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
	</>
);

export default CardImage;
