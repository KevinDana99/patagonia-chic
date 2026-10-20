import React from 'react';
import CustomIcon from '../../../graphics/CustomIcon';
import Text from '../../../texts/Text';
import {
	Container,
	Requirements,
	Title,
	StyledCustomIcon,
	SectionTitle,
	NotIncludeContainer,
	ButtonItem,
	IconClose,
	Linked,
} from './styled';
import { SectionItemType } from './types';
const SectionItem = ({ title, subTitle, included }: SectionItemType) => {
	return (
		<Container>
			{included.status ? (
				<StyledCustomIcon name="check-circle" color="#00cf57" size={15} />
			) : (
				<IconClose>
					<CustomIcon name={'close-icon'} size={10} />
				</IconClose>
			)}

			{included.status ? (
				<SectionTitle>
					<Title>
						<Text size={12} weight={'regular'} color={'#000'}>
							{title}
						</Text>
					</Title>

					{subTitle && (
						<Requirements>
							<Text size={12} weight={'regular'} color="#888">
								{'- ' + subTitle}
							</Text>
						</Requirements>
					)}
				</SectionTitle>
			) : (
				<NotIncludeContainer>
					<Title>
						<Text size={12} color={'#000000'} weight={'regular'}>
							{title}
						</Text>
					</Title>

					{included.details && (
						<Linked href={included.details.target}>
							<ButtonItem title={included.details.title} />
						</Linked>
					)}
				</NotIncludeContainer>
			)}
		</Container>
	);
};

export default SectionItem;
