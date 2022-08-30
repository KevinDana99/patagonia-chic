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
			{included ? (
				<IconContainer>
					<IconCheck icon="IconCheck" color="#3BC053" size={15} />
				</IconContainer>
			) : (
				<IconContainer>
					<IconClose size={20} />
				</IconContainer>
			)}

			{included ? (
				<SectionTitle>
					<Title>{title}</Title>
					{requirements && <div>-</div>}
					{requirements && <Requirements>{requirements}</Requirements>}
				</SectionTitle>
			) : (
				<NotIncludeContainer>
					<Title>{title}</Title>
					<ButtonItem title="Ver detalle" />
				</NotIncludeContainer>
			)}
		</Container>
	);
};

export default SectionItem;
