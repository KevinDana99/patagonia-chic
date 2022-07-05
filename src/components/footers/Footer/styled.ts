import styled from 'styled-components';
import { FooterPropsType, LanguageType, SectionLeftType } from './types';

export const Container = styled.div<Pick<FooterPropsType, 'backgroundColor'>>`
	padding-top: 50px;
	padding-bottom: 40px;
	height: 388px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) =>
		props.backgroundColor
			? props.backgroundColor
			: 'rgba(227, 236, 236, 0.404)'};
	@media screen and (max-width: 1120px) {
		padding-top: 34px;
		height: auto;
	}
	@media screen and (max-width: 450px) {
	}
`;

export const ContainerSectionsTop = styled.div`
	display: flex;
	width: 1120px;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
	border: 1px solid blue;
	@media screen and (max-width: 1120px) {
		width: 720px;
	}
	@media screen and (max-width: 450px) {
		width: 80%;
		flex-direction: column;
	}
`;

export const ContainerSectionsCommon = styled.div`
	display: flex;
	justify-content: flex-end;
	width: fit-content;
	height: 215px;
	gap: 21px;
	position: absolute;
	right: 0;
	@media screen and (max-width: 1120px) {
		flex-direction: column;
		gap: 0;
		height: auto;
		position: relative;
	}
	@media screen and (max-width: 450px) {
		width: 80%;
	}
`;

export const ContainerSocial = styled.div`
	height: 62px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 1120px;
	@media screen and (max-width: 1120px) {
		width: 720px;
	}
	@media screen and (max-width: 450px) {
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
	margin-top: 55px;
	margin-bottom: 34px;
	@media screen and (max-width: 1120px) {
		margin-top: 34px;
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
	width: 350px;
	@media screen and (max-width: 1120px) {
		width: 355px;
	}
	@media screen and (max-width: 450px) {
		width: 90%;
	}
`;
export const ContainerSectionCommon = styled.div`
	width: 202px;
	padding-bottom: 80px;
	@media screen and (max-width: 1120px) {
		width: 350px;
		padding-bottom: 0;
	}
	@media screen and (max-width: 450px) {
		width: 90%;
	}
`;

export const HrDivStyled = styled.div<Pick<FooterPropsType, 'colorDivision'>>`
	width: 1120px;
	height: 2px;
	background-color: ${({ colorDivision }) =>
		colorDivision ? colorDivision : 'lightblue'};
	@media screen and (max-width: 1120px) {
		width: 720px;
	}
	@media screen and (max-width: 450px) {
		margin-top: 2rem;
		width: 80%;
	}
`;

export const CopyrightStyled = styled.p`
	position: absolute;
	left: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	margin-top: 21px;
	@media screen and (max-width: 1120px) {
		margin-top: 34px;
	}
	@media screen and (max-width: 450px) {
	}
`;
export const Text = styled.p`
	margin-block-start: 13px;
	margin-block-end: 0;
`;

export const TextSectionLeft = styled.p`
	margin-block-start: 21px;
	margin-block-end: 0;
`;
export const IconContainer = styled.div`
	position: absolute;
	right: 0;
	width: 100px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 1120px) {
		margin-top: 34px;
	}
	@media screen and (max-width: 450px) {
		display: none;
	}
`;

export const LinkStyled = styled.a`
	margin-top: 21px;
	text-decoration: none;
	color: black;
	:hover {
		text-decoration: underline;
	}
	@media screen and (max-width: 1120px) {
		margin-top: 0;
	}
	@media screen and (max-width: 450px) {
		margin-bottom: -1rem;
	}
`;

export const Title = styled.h3`
	margin-top: 2.5rem;
	font-weight: bold;
	@media screen and (max-width: 1120px) {
		position: absolute;
		margin-top: 0;
		left: 0;
		margin-block-start: 0;
		margin-block-end: 0;
	}
	@media screen and (max-width: 450px) {
	}
`;

export const LanguageLabel = styled.label`
	font-size: 1.3rem;
	font-weight: bold;
`;

export const ContainerIcons = styled.div`
	display: none;
	@media screen and (max-width: 1120px) {
		margin-top: 1.5rem;
		display: flex;
		width: 80%;
		justify-content: 'left';
	}
	@media screen and (max-width: 450px) {
	}
`;
export const IconsMovil = styled.div`
	display: none;
	@media screen and (max-width: 450px) {
		width: 100px;
		display: flex;
		justify-content: space-between;
	}
`;

export const DesktopSectionCommon = styled.div`
	@media screen and (max-width: 1120px) {
		display: none;
	}
	@media screen and (max-width: 450px) {
	}
`;

export const MenuButton = styled.button`
	display: none;
	@media screen and (max-width: 1120px) {
		width: 100%;
		border: 2px solid transparent;
		background-color: transparent;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		margin-top: 0.9rem;
	}
	@media screen and (max-width: 450px) {
	}
`;

export const DropdownMenu = styled.div`
	display: none;
	@media screen and (max-width: 1120px) {
		display: flex;
		position: relative;
		width: 80%;
		flex-direction: column;
		justify-content: space-between;
	}
	@media screen and (max-width: 450px) {
	}
`;

export const ImageOpen = styled.div`
	font-size: 2rem;
	position: absolute;
	right: 0;
`;

export const HrStyled = styled.hr`
	display: none;
	@media screen and (max-width: 1120px) {
		display: block;
		margin-top: 21px;
		margin-bottom: 21px;
	}
	@media screen and (max-width: 450px) {
	}
`;
