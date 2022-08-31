import React from 'react';
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
	{
		console.log(subTitle);
	}
	return (
		<Container>
			{included.status ? (
				<StyledCustomIcon name="check-circle" color="#3BC053" size={15} />
			) : (
				<IconClose size={20} />
			)}

			{included.status ? (
				<SectionTitle>
					<Title>{title}</Title>
					{subTitle && <div>-</div>}
					{subTitle && <Requirements>{subTitle}</Requirements>}
				</SectionTitle>
			) : (
				<NotIncludeContainer>
					<Title>{title}</Title>

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
