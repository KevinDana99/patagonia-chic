import styled from 'styled-components';
import { FooterPropsType, LanguageType, SectionLeftType } from './types';

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
	@media screen and (max-width: 400px) {
		padding-top: 30px;
	}
`;

export const ContainerSectionsTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media screen and (max-width: 400px) {
		width: 80%;
		flex-direction: column;
	}
`;

export const ContainerSocial = styled.div`
	padding-top: 30px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 85%;
	@media screen and (max-width: 400px) {
		width: 80%;
	}
`;
export const Language = styled.div<
	Pick<SectionLeftType, 'backgroundColorLanguage'>
>`
	background-color: ${({ backgroundColorLanguage }) =>
		backgroundColorLanguage ? backgroundColorLanguage : 'white'};
	width: 6.5rem;
	border-radius: 3rem;
	padding: 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	@media screen and (max-width: 400px) {
		display: none;
	}
`;

export const ImgStyled = styled.div<Pick<LanguageType, 'flag'>>`
	background-repeat: no-repeat;
	background-image: url(${(props) => props.flag});
	width: 40px;
	height: 40px;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
`;

export const LeftSection = styled.div`
	width: 28%;
	@media screen and (max-width: 400px) {
		width: 90%;
	}
`;
export const ContainerSectionCommon = styled.div`
	width: 15%;
	padding-bottom: 80px;
	@media screen and (max-width: 400px) {
		width: 90%;
	}
`;

export const HrDivStyled = styled.div<Pick<FooterPropsType, 'colorDivision'>>`
	width: 85%;
	height: 2px;
	background-color: ${({ colorDivision }) =>
		colorDivision ? colorDivision : 'lightblue'};
	@media screen and (max-width: 400px) {
		margin-top: 2rem;
		width: 80%;
	}
`;

export const CopyrightStyled = styled.p`
	position: absolute;
	left: 0;
`;
export const IconContainer = styled.div`
	position: absolute;
	right: 0;
	width: 100px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 400px) {
		display: none;
	}
`;

export const LinkStyled = styled.a`
	text-decoration: none;
	margin-bottom: -1rem;
	color: black;
	:hover {
		text-decoration: underline;
	}
`;

export const Title = styled.h3`
	font-weight: bold;
	@media screen and (max-width: 400px) {
		position: absolute;
		left: 0;
	}
`;

export const LanguageLabel = styled.label`
	font-size: 1.3rem;
	font-weight: bold;
`;

export const ContainerIcons = styled.div`
	display: none;
	@media screen and (max-width: 400px) {
		margin-top: 1.5rem;
		display: flex;
		width: 80%;
		justify-content: 'left';
	}
`;
export const IconsMovil = styled.div`
	@media screen and (max-width: 400px) {
		width: 100px;
		display: flex;
		justify-content: space-between;
	}
`;

export const DesktopSectionCommon = styled.div`
	@media screen and (max-width: 400px) {
		display: none;
	}
`;

export const MenuButton = styled.button`
	display: none;
	@media screen and (max-width: 400px) {
		width: 100%;
		border: 2px solid transparent;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin-top: 0.9rem;
	}
`;

export const DropdownMenu = styled.div`
	display: none;
	@media screen and (max-width: 400px) {
		display: flex;
		position: relative;
		width: 80%;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const ImageOpen = styled.img`
	width: 1rem;
	position: absolute;
	right: 0;
`;

export const HrStyled = styled.hr`
	display: none;
	@media screen and (max-width: 400px) {
		display: block;
		margin-top: 2rem;
		margin-bottom: -3.5rem;
	}
`;
