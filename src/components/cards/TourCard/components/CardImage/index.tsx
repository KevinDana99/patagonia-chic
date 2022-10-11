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

const CardImage = ({
	coverImage,
	date,
	isAvailable,
	isAddedToCart,
}: CardImageTypes) => {
	if (coverImage) {
		return (
			<ContainerImage
				coverImage={typeof coverImage === 'string' ? coverImage : undefined}
			>
				{typeof coverImage !== 'string' && coverImage}

				{isAvailable && isAddedToCart && (
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
			</ContainerImage>
		);
	} else {
		return null;
	}
};

export default CardImage;
