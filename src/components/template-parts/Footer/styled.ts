import styled from 'styled-components';
import { deviceSize } from '../../../constants/devicesSizes';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FooterPropsType, StyleDevModeType } from './types';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
`;

export const Wrapper = styled.div`
	max-width: 1000px;
	display: flex;
	flex-direction: column;
`;

export const ContainerSectionsTop = styled.div<StyleDevModeType>`
	display: flex;
	background-color: ${({ devMode }) => (devMode ? 'orange' : 'none')};
	width: 100%;
	justify-content: center;
`;

export const ContainerSectionsCommon = styled.div<StyleDevModeType>`
	display: flex;
	justify-content: flex-end;
	width: fit-content;
	background-color: ${({ devMode }) => (devMode ? 'blue' : 'none')};
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
		text-decoration: underline;
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
