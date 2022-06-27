import styled from 'styled-components';
import { FooterPropsType, LanguageType } from './types';

export const Container = styled.div<
	Pick<FooterPropsType, 'backgroundColor' | 'color'>
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

export const ContainerSectionsTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ContainerSocial = styled.div`
	padding-top: 30px;
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
	gap: 10px;
`;

export const ImgStyled = styled.div<Pick<LanguageType, 'flag'>>`
	background-repeat: no-repeat;
	background-image: url(${(props) => props.flag});
	width: 50px;
	height: 50px;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
`;

export const LeftSection = styled.div`
	width: 28%;
`;
export const ContainerSectionCommon = styled.div`
	width: 15%;
	padding-bottom: 80px;
`;

export const HrStyled = styled.div<Pick<FooterPropsType, 'colorDivision'>>`
	width: 85%;
	height: 2px;
	background-color: ${({ colorDivision }) =>
		colorDivision ? colorDivision : 'lightblue'};
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

export const Title = styled.h3`
	font-weight: bold;
`;
