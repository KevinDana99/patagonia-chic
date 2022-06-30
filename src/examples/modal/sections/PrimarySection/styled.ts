import styled from 'styled-components';

export const Section = styled.section`
	width: 100%;
	min-height: 50px;
	padding: 0;
	margin: 0;
	border: 0;
	text-rendering: optimizeLegibility;
	font-weight: 300;
	color: #888;
	font-size: 14px;
	text-shadow: 0 0 0 rgba(6, 6, 6, 0.047);
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Linking = styled.a`
	text-decoration: none;
	outline: none;
`;

export const Title = styled.section`
	color: #222;
	font-weight: 400;
	font-size: 15px;
	display: flex;
	align-items: center;
`;

export const Subtitle = styled.section`
	display: flex;
	align-items: center;
`;
