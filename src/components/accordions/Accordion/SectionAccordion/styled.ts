import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

export const SectionContainer = styled.div`
	display: flex;
	width: 100%;
	min-width: 180px;
	flex-direction: column;
`;

export const SectionTitleContainer = styled.div`
	padding: 20px;
	padding-left: 11.46px;
	padding-bottom: 13px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SectionTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.016em;
	height: 100%;
	margin: 0px;
`;

export const Divider = styled.div`
	height: 1px;
	background-color: #d6d6d6;
`;

export const SectionText = styled.p`
	font-size: 12px;
	font-weight: 400;
	color: #383838;
	margin: 0px;
`;

export const ContainerLinkStyled = styled.div`
	padding: 0px;

	padding-left: 11.46px;
`;

export const LinkStyled = styled.a`
	text-decoration: none;
	color: #000000;
	:hover {
		text-decoration: underline;
	}
`;

export const SectionLabel = styled(SectionText)`
	margin-bottom: 13px;
	font-size: 15px;
`;

export const ArrowIconDown = styled(IoIosArrowDown)`
	cursor: pointer;
`;

export const ArrowIconUp = styled(IoIosArrowUp)`
	cursor: pointer;
`;
