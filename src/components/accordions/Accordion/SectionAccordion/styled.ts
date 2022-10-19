import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';

export const SectionContainer = styled.div`
	display: flex;
	width: 100%;
	min-width: 180px;
	flex-direction: column;
`;

export const SectionTitleContainer = styled.div`
	height: 41px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SectionTitle = styled.h3`
	font-size: 18px;
	font-weight: 500;
	height: 100%;
	margin: 0px;
`;

export const SectionDivider = styled.div``;

export const SectionText = styled.p`
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

export const SectionLabel = styled(SectionText)`
	margin: 13px 0px;
	font-size: 15px;
`;

export const ArrowIconDown = styled(IoIosArrowDown)`
	cursor: pointer;
`;

export const ArrowIconUp = styled(IoIosArrowUp)`
	cursor: pointer;
`;
