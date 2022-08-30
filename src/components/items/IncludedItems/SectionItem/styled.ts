import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import TertiaryButton from '../../../buttons/TertiaryButton';
import CustomIcon from '../../../icons/CustomIcon';

export const Container = styled.div`
	margin-top: 5px;
	display: flex;
`;

export const Title = styled.div`
	margin-right: 5px;
	font-size: 12px;
	line-height: 1.3;
	font-weight: 400;
	color: #000;
	letter-spacing: -0em;
`;

export const Requirements = styled.div`
	margin-left: 5px;
	font-size: 12px;
	min-width: 74px;
	color: #888;
	font-weight: 200;
	white-space: nowrap;
	letter-spacing: -0.01em;
	display: flex;
	justify-content: space-between;
`;

export const SectionTitle = styled(Requirements)`
	display: flex;
`;

export const NotIncludeContainer = styled.div`
	margin-left: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 20px;
`;

export const ButtonItem = styled(TertiaryButton)`
	padding: 0px;
`;

export const IconCheck = styled(CustomIcon)``;
export const IconClose = styled(IoCloseOutline)`
	padding: 0px;
	font-size: 15px;
	display: inline-block;
	justify-content: center;
	align-items: center;
	color: rgb(203, 203, 203);
`;
