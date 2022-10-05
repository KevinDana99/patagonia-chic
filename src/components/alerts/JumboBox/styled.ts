import styled from 'styled-components';
import Text from '../../texts/Text';
import Background from './background';

export const Container = styled.div`
	width: 1118px;
	height: 425px;
	position: relative;
`;

export const ContentContainer = styled.div`
	top: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TextTitle = styled(Text)`
	text-align: center;
`;

export const BoxTitle = styled.div`
	width: 400px;
	display: flex;
	justify-content: center;
`;

export const BoxButton = styled.div`
	margin-top: 46px;
	display: flex;
	justify-content: center;
`;
