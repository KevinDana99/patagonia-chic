import React from 'react';
import Text from '../../../texts/Text';
import {
	Container,
	Requirements,
	Title,
	StyledCustomIcon,
	IconClose,
	SectionTitle,
	NotIncludeContainer,
	ButtonItem,
} from './styled';
import { SectionItemType } from './types';
const SectionItem = ({ title, subTitle, included }: SectionItemType) => {
	return (
		<Container>
			{included.status ? (
				<StyledCustomIcon name="check-circle" color="#3BC053" size={15} />
			) : (
				<IconClose size={20} />
			)}

			{included.status ? (
				<SectionTitle>
					<Title>
						<Text size={12} weight={'regular'} color={'#000'}>
							{title}
						</Text>
					</Title>
					{subTitle && <div>-</div>}
					{subTitle && (
						<Requirements>
							<Text size={12} weight={'regular'} color="#888">
								{subTitle}
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
						<a href={included.details.target}>
							<ButtonItem title={included.details.title} />
						</a>
					)}
				</NotIncludeContainer>
			)}
		</Container>
	);
};

export default SectionItem;
