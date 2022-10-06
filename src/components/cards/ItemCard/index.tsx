import React, { useEffect } from 'react';
import CustomIcon from '../../graphics/CustomIcon';
import { CustomIconType } from '../../graphics/CustomIcon/types';
import {
	Card,
	Container,
	BoxContent,
	BoxIcon,
	BoxTitle,
	TextItem,
	TextColorItem,
} from './styled';
import { ItemCardType } from './types';

const ItemCard = ({ title, icon, keywordColor, keywords }: ItemCardType) => {
	const words = title.split(' ');
	console.log(words);

	return (
		<Container>
			<Card hover={true}>
				<BoxContent>
					<BoxTitle>
						{words?.map((word) => {
							return keywords?.includes(word) ? (
								<TextColorItem
									size={20}
									weight={'semi-bold'}
									color={keywordColor}
								>
									{word}
								</TextColorItem>
							) : (
								<TextItem size={20} weight={'semi-bold'} color={'#44444'}>
									{word}
								</TextItem>
							);
						})}
					</BoxTitle>

					<BoxIcon>
						<CustomIcon
							color={keywordColor}
							size={30}
							name={icon as CustomIconType['name']}
						/>
					</BoxIcon>
				</BoxContent>
			</Card>
		</Container>
	);
};

export default ItemCard;
