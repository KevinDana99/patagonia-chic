import styled from 'styled-components';
import { FooterPropsType } from './types';

export const Container = styled.div<
	Omit<FooterPropsType, 'leftList' | 'sectionBottom'>
>`
	padding-top: 50px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	justify-content: space-between;
`;

export const ContainerSocial = styled.div`
	padding-top: 10px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 85%;
`;
export const Language = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const LeftSection = styled.div`
	width: 28%;
`;
export const ContainerSectionCommon = styled.div`
	width: 15%;
`;

export const HrStyled = styled.hr`
	width: 85%;
	height: 3px;
	color: aliceblue;
`;

export const CopyrightStyled = styled.p`
	position: absolute;
	left: 0;
`;
export const IconContainer = styled.div`
	position: absolute;
	right: 0;
	width: 80px;
	display: flex;
	justify-content: space-between;
`;

export const LinkStyled = styled.a`
	text-decoration: none;
	color: black;
	:hover {
		text-decoration: underline;
	}
`;
