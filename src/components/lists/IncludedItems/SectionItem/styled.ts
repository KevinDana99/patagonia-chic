import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import TertiaryButton from '../../../buttons/TertiaryButton';
import CustomIcon from '../../../graphics/CustomIcon';

export const Container = styled.div`
	margin-top: 5px;
	display: flex;
	justify-content: flex-start;
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
	font-size: 12px;
	min-width: 74px;
	color: #888;
	font-weight: 200;
	letter-spacing: -0.01em;
	display: flex;
	justify-content: space-between;
`;

export const SectionTitle = styled(Requirements)`
	margin-left: 5px;
	display: flex;
	flex-wrap: wrap;
`;

export const NotIncludeContainer = styled.div`
	margin-left: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const Linked = styled.a`
	text-decoration: none;
`;

export const ButtonItem = styled(TertiaryButton)`
	padding: 0px;
`;

export const StyledCustomIcon = styled(CustomIcon)`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 15px;
`;
export const IconClose = styled.div`
	height: 10px;

	margin-left: 2.2px;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;
