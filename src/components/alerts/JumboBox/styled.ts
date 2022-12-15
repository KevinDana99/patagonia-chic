import styled from 'styled-components';
import Text from '../../texts/Text';
import { JumboBoxType } from './types';
import { size } from './../../../constants/devicesSizes';

export const Container = styled.div<JumboBoxType>`
	padding: 20px;
	box-sizing: border-box;
	border-radius: 15px;
	background: ${({ background }) =>
		background
			? background
			: `radial-gradient(
		139.76% 1671.53% at 119.88% 50%,
		rgba(43, 235, 255, 0.1) 0%,
		rgba(59, 178, 249, 0.1) 20.31%,
		rgba(35, 132, 229, 0.1) 41.67%,
		rgba(35, 132, 229, 0.1) 61.98%,
		rgba(35, 132, 229, 0.1) 80.21%,
		rgba(168, 88, 224, 0.1) 98.44%
	)`};

	@media (max-width: ${size.mobile}) {
		width: 100%;
		border-radius: 0px;
	}
`;

export const ContentContainer = styled.div`
	top: 0px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TextTitle = styled(Text)`
	text-align: center;
`;

export const BoxTitle = styled.div`
	width: 100%;
	max-width: 400px;
	display: flex;
	justify-content: center;
`;

export const BoxButton = styled.div`
	margin-top: 46px;
	display: flex;
	justify-content: center;
`;
