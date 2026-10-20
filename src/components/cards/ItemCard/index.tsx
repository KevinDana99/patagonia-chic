import React from 'react';
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

	const searchWordsAndFixPoints = (word: string) => {
		if (word.includes('.')) {
			return word.substring(0, word.length - 1);
		} else if (word.includes(',')) {
			return word.substring(0, word.length - 1);
		} else {
			return word;
		}
	};

	return (
		<Container>
			<Card hover={true}>
				<BoxContent>
					<BoxTitle>
						{words?.map((word, index) => {
							return keywords?.includes(searchWordsAndFixPoints(word)) &&
								index == words.indexOf(word) ? (
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
