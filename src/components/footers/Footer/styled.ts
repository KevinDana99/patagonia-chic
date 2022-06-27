import styled from 'styled-components';
import { FooterPropsType } from './types';

export const Container = styled.div<
	Omit<FooterPropsType, 'leftList' | 'sectionBottom'>
>`
	display: flex;
	flex-direction: column;
	background-color: ${(props) =>
		props.backgroundColor
			? props.backgroundColor
			: 'rgba(227, 236, 236, 0.404)'};
	color: ${(props) => (props.color ? props.color : 'black')};
`;

export const ContainerSectionsTop = styled.div<
	Omit<FooterPropsType, 'leftList' | 'sectionBottom'>
>`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const ContainerSocial = styled.div`
	display: flex;
	flex-direction: row;
`;
export const Language = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const LeftSection = styled.div`
	width: 400px;
`;
