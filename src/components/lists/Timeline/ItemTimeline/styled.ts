import { IoCheckmarkCircle, IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import TertiaryButton from '../../../buttons/TertiaryButton';

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const BoxItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 13px;
`;

export const Title = styled.div`
	margin: 1px 0px;
	font-size: 17px;
	font-weight: 600;
	color: #3b3b3b;
`;

export const SubTitle = styled.div`
	font-size: 15px;
	color: #888888;
`;

export const Link = styled.a`
	text-decoration: none;
`;

export const ContentButton = styled.div`
	margin-top: 1px;
	display: flex;
	align-items: flex-end;
	min-height: 20px;
	box-sizing: border-box;

	border-bottom: solid 1px transparent;
	&:hover {
		text-decoration: none;
	}
`;

export const ButtonItem = styled(TertiaryButton)`
	margin: 0px;
	padding: 0px;
	text-decoration: none;
	align-items: flex-end;
	box-sizing: border-box;

	svg {
		margin-left: 2px;
		box-sizing: border-box;
	}
	&:hover {
		text-decoration: none;
		${ContentButton} {
			border-bottom: solid 1px #0090e0;
		}
	}
`;

export const BoxCurrency = styled.div`
	margin-left: 3px;
	height: 15px;
	font-size: 10px;
	text-transform: uppercase;
	outline: none;
`;

export const CheckIcon = styled(IoCheckmarkCircle)`
	position: absolute;
	font-size: 20px;
	color: #3bc053;
	background-color: white;
`;

export const BoxClear = styled.div`
	margin-left: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const IconClear = styled(IoCloseOutline)`
	color: #888888;

	&:hover {
		color: black;
		cursor: pointer;
	}
`;
