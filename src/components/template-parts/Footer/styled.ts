import styled from 'styled-components';
import { deviceSize } from '../../../constants/devicesSizes';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FooterPropsType, StyleDevModeType } from './types';

export const Container = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	cursor: default;
`;

export const Wrapper = styled.div<StyleDevModeType>`
	width: 100%;
	max-width: 1120px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: ${({ devMode }) => (devMode ? 'black' : 'none')};
	@media (${deviceSize.tablet}) {
		padding: 55px 20px 21px;
		width: 100%;
	}
	@media (${deviceSize.mobile}) {
		padding: 55px 20px 21px;
		width: 100%;
	}
`;

export const ContainerSectionsTop = styled.div<StyleDevModeType>`
	width: 100%;
	display: flex;
	background-color: ${({ devMode }) => (devMode ? 'orange' : 'none')};
	width: auto;
	justify-content: center;
`;

export const ContainerSectionsCommon = styled.div<StyleDevModeType>`
	display: flex;
	justify-content: flex-end;
	background-color: ${({ devMode }) => (devMode ? 'blue' : 'none')};
	margin-left: auto;
	box-sizing: border-box;
	@media (${deviceSize.tablet}) {
		margin: 0px;
	}
	@media (${deviceSize.mobile}) {
		margin: 0px;
	}
`;

export const LanguageMovil = styled.div`
	display: none;
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: rgb(35, 132, 229);
	background-image: radial-gradient(
		circle,
		rgba(43, 235, 255, 0.46),
		rgba(59, 178, 249, 0.15) 27.5%,
		rgba(35, 132, 229, 0.3),
		rgb(35, 132, 229) 57.5%,
		rgba(35, 132, 229, 0.81) 75%,
		rgba(168, 88, 224, 0.37)
	) !important;
`;

export const FooterText = styled.p`
	font-size: 12px;
	font-weight: 400;
	color: #383838;
	margin: 0px;
`;

export const LinkStyled = styled.a`
	text-decoration: none;
	color: #000000;
	:hover {
		text-decoration: none;
	}
`;
export const ContainerIcons = styled.div`
	display: none;
`;
export const IconsMovil = styled.div`
	display: none;
`;

export const SectionContainer = styled.div<StyleDevModeType>`
	display: flex;
	width: 100%;
	flex-direction: column;

	@media (${deviceSize.mobile}) {
		background-color: ${({ devMode }) => (devMode ? 'red' : 'none')};
	}
	@media (${deviceSize.tablet}) {
		background-color: ${({ devMode }) => (devMode ? 'blue' : 'none')};
	}
`;

export const SectionTitleContainer = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
`;

export const SectionTitleMobile = styled.h3`
	font-size: 18px;
	font-weight: 500;
	margin: 0px;
`;

export const ArrowIconDown = styled(IoIosArrowDown)``;

export const ArrowIconUp = styled(IoIosArrowUp)``;

export const SectionDivider = styled.div`
	height: 1px;
	border-bottom: 1px solid #d6d6d6;
	margin-top: 20px;
	margin-bottom: 20px;
`;
