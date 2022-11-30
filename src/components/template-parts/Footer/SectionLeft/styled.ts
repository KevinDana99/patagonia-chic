import { TbWorld } from 'react-icons/tb';
import styled from 'styled-components';
import { deviceSize } from '../../../../constants/devicesSizes';
import { FooterText } from '../styled';
import { StyleDevModeType } from '../types';

export const LeftSection = styled.div<StyleDevModeType>`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${({ devMode }) => (devMode ? 'lightblue' : 'none')};
`;

export const Language = styled.div`
	background-color: #ffffff;
	width: fit-content;
	border-radius: 25px;
	padding: 7px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 50px;
	margin-bottom: 40px;
	background-color: #f1f4f7;
`;

export const LanguageLabel = styled.p`
	font-size: 14px;
	font-weight: 600;
	margin: 0px;
`;

export const DescriptionContainer = styled.div<StyleDevModeType>`
	min-width: 300px;
	display: flex;
	flex-direction: column;
	background-color: ${({ devMode }) => (devMode ? 'brown' : 'none')};
`;

export const Description = styled(FooterText)`
	margin-top: 20px;
`;

export const Direction = styled(Description)`
	color: #383838;
	margin-top: 13px;
`;

export const WorldIcon = styled(TbWorld)`
	color: #3b3b3b;
	font-size: 25px;
`;

export const SocialMobileContainer = styled.div<StyleDevModeType>`
	margin-top: 20px;
	width: 100%;
	height: 100%;
	background-color: ${({ devMode }) => (devMode ? 'green' : 'none')};
	display: none;
	@media (${deviceSize.mobile}) {
		display: flex;
		width: 100%;
		margin: 89px 0px;
	}
	@media (${deviceSize.tablet}) {
		display: flex;
		margin-left: 85px;
	}
`;

export const LeftSideContainer = styled.div<StyleDevModeType>`
	display: flex;
	width: 100%;
	background-color: ${({ devMode }) => (devMode ? 'red' : 'none')};
	@media (${deviceSize.mobile}) {
		flex-direction: column;
	}
`;
