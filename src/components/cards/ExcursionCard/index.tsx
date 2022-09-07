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
} from './styled';
import { ExcursionCardType } from './types';

const Excursion = ({ coverImage }: ExcursionCardType) => {
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
						<Title></Title>
						<SubTitle></SubTitle>
					</BoxTitle>
					<hr color="#D7D5D5" />
					<BoxReserve>
						<BoxPrice>
							<Price></Price>
							<SubPrice></SubPrice>
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
