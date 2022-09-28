import { TbWorld } from 'react-icons/tb';
import styled from 'styled-components';
import { deviceSize } from '../../../constants/devicesSizes';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const Container = styled.div`
	width: -webkit-fill-available;
	padding-top: 50px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding: 50px 10% 0px 10%;
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;

	@media ${deviceSize.mobileL} {
		padding: 50px 10px 0px 10px;
	}
	@media ${deviceSize.tablet} {
		padding: 30px 50px;
	}
`;

export const ContainerSectionsTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media ${deviceSize.tablet} {
		flex-direction: row;
	}
`;

export const ContainerSectionsCommon = styled.div`
	display: flex;
	justify-content: flex-end;
	width: fit-content;
`;

export const ContainerSocial = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;
	margin-bottom: 25px;
	width: 100%;
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

	@media ${deviceSize.mobileL} {
		margin-top: 0px;
		margin-bottom: 0px;
	}

	@media ${deviceSize.tablet} {
		margin-top: 0px;
		margin-bottom: 0px;
	}
`;
export const LanguageMovil = styled.div`
	display: none;
	@media screen and (max-width: 450px) {
		display: flex;
		background-color: #ffffff;
		width: 6.5rem;
		border-radius: 3rem;
		padding: 0.5rem;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		margin-top: 89px;
	}
`;

export const WorldIcon = styled(TbWorld)`
	color: #3b3b3b;
	font-size: 25px;
`;

export const LeftSection = styled.div`
	width: 350px;
	display: flex;
	flex-direction: column;

	@media ${deviceSize.mobileL} {
		flex-direction: column;
	}

	@media ${deviceSize.tablet} {
		width: initial;
	}
`;

export const LeftSideContainer = styled.div`
	display: flex;
	width: 100%;

	@media ${deviceSize.mobileL} {
		flex-direction: column;
	}
`;

export const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${deviceSize.tablet} {
		width: 50%;
	}
`;

export const ContainerSectionCommon = styled.div`
	width: 200px;
	@media ${deviceSize.mobileL} {
		display: none;
	}
	@media ${deviceSize.tablet} {
		display: none;
	}
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

export const Description = styled(FooterText)`
	margin-top: 20px;
`;

export const Direction = styled(Description)`
	color: #383838;
	margin-top: 13px;
`;
export const CopyrightText = styled(FooterText)`
	display: flex;
	justify-self: flex-start;
`;

export const SectionLabel = styled(FooterText)`
	margin: 13px 0px;
	font-size: 15px;
`;

export const IconContainer = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 450px) {
		display: none;
	}
`;

export const LinkStyled = styled.a`
	text-decoration: none;
	color: #000000;
	:hover {
		text-decoration: underline;
	}
`;

export const SectionTitle = styled.h3`
	margin-top: 2.5rem;
	font-weight: 600;
	font-size: 15px;
`;

export const LanguageLabel = styled.p`
	font-size: 14px;
	font-weight: 600;
	margin: 0px;
`;

export const ContainerIcons = styled.div`
	display: none;
	@media screen and (max-width: 1120px) {
		margin-top: 21px;
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

export const SocialMobileContainer = styled.div`
	margin: 60px 0px;
	@media ${deviceSize.tablet} {
		width: 50%;
		margin: 30px 0px 0px 0px;
	}
	@media ${deviceSize.mobileL} {
		display: flex;
		flex-direction: column;
	}
`;

export const SectionContainer = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;
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
