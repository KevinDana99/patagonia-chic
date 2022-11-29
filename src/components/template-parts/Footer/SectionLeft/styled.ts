import { TbWorld } from 'react-icons/tb';
import styled from 'styled-components';
import { FooterText } from '../styled';

export const LeftSection = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;
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

export const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
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

export const SocialMobileContainer = styled.div`
	margin: 60px 0px;
`;

export const LeftSideContainer = styled.div`
	display: flex;
	width: 100%;
`;
