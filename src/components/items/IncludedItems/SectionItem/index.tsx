import React from 'react';
import {
	Container,
	Requirements,
	Title,
	IconContainer,
	IconCheck,
	IconClose,
	SectionTitle,
	NotIncludeContainer,
	ButtonItem,
} from './styled';
import { SectionItemType } from './types';
const SectionItem = ({ title, requirements, included }: SectionItemType) => {
	return (
		<Container>
			{included.status ? (
				<IconContainer>
					<IconCheck icon="IconCheck" color="#3BC053" size={15} />
				</IconContainer>
			) : (
				<IconContainer>
					<IconClose size={20} />
				</IconContainer>
			)}

			{included.status ? (
				<SectionTitle>
					<Title>{title}</Title>
					{requirements && <div>-</div>}
					{requirements && <Requirements>{requirements}</Requirements>}
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
