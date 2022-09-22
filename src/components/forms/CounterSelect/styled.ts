import styled from 'styled-components';

export const CounterSelectContainer = styled.div`
	display: flex;
`;

export const CounterTitle = styled.p`
	font-size: 13px;
	font-weight: 300;
	color: #0077b9;
	margin-right: 65px;
`;

export const CounterButtons = styled.div`
	display: flex;
	align-items: center;
`;

export const CounterButton = styled.button`
	color: #999999;
	font-size: 25px;
	font-weight: 600;
	height: 32px;
	width: 32px;
	line-height: 26px;
	border-radius: 100px;
	border: 1px solid #999999;
	display: flex;
	justify-content: center;
	cursor: pointer;
	background-color: transparent;

	&:disabled {
		opacity: 0.3;
	}
`;

export const CounterText = styled.p`
	margin: 0px 16px;
`;
