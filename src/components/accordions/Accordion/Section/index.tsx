import React from 'react';
import Text from '../../../texts/Text';
import {
	ContainerLinkStyled,
	LinkStyled,
	SectionContainer,
	SectionLabel,
	SectionTitle,
	SectionTitleContainer,
} from '../SectionAccordion/styled';
import {
	SectionBoxTitleType,
	SectionLabelType,
	SectionLinkType,
	SectionTitleType,
	SectionType,
} from './types';

const Section = ({ children }: SectionType) => {
	return <div>{children}</div>;
};

// eslint-disable-next-line react/display-name
Section.Container = ({ children }: SectionType) => {
	return <SectionContainer>{children}</SectionContainer>;
};

// eslint-disable-next-line react/display-name
Section.BoxTitle = ({ children, onClick }: SectionBoxTitleType) => {
	return (
		<SectionTitleContainer onClick={onClick}>{children}</SectionTitleContainer>
	);
};

// eslint-disable-next-line react/display-name
Section.Title = ({ title }: SectionTitleType) => {
	return (
		<SectionTitle>
			<Text>{title}</Text>
		</SectionTitle>
	);
};
// eslint-disable-next-line react/display-name
Section.Label = ({ label }: SectionLabelType) => {
	return (
		<SectionLabel>
			<Text size={15}>{label}</Text>
		</SectionLabel>
	);
};

// eslint-disable-next-line react/display-name
Section.BoxLink = ({ children }: SectionType) => {
	return <ContainerLinkStyled>{children}</ContainerLinkStyled>;
};

// eslint-disable-next-line react/display-name
Section.Link = ({ children, href, key, target }: SectionLinkType) => {
	return (
		<LinkStyled href={href} key={key} target={target}>
			{children}
		</LinkStyled>
	);
};

// eslint-disable-next-line react/display-name
Section.Content = ({ children }: SectionType) => {
	return <div>{children}</div>;
};

export default Section;
