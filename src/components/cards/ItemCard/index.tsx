import React from 'react';
import CustomIcon from '../../graphics/CustomIcon';
import { CustomIconType } from '../../graphics/CustomIcon/types';
import Text from '../../texts/Text';
import { Card, Container, BoxContent, BoxIcon, BoxTitle } from './styled';
import { ItemCardType } from './types';

const ItemCard = ({ title, icon, keywordColor, keywords }: ItemCardType) => {
	return (
		<Container>
			<Card hover={true}>
				<BoxContent>
					<BoxTitle>
						<Text size={20} weight={'semi-bold'} color={'#44444'}>
							{title}
						</Text>
					</BoxTitle>

					<BoxIcon>
						<CustomIcon size={30} name={icon as CustomIconType['name']} />
					</BoxIcon>
				</BoxContent>
			</Card>
		</Container>
	);
};

export default ItemCard;
