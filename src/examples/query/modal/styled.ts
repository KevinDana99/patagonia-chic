import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 5;
	height: 100%;
	background-color: #11111162;
`;

export const BoxModal = styled.div`
	font-family: arial;
	font-size: 18px;
	padding: 3%;
	box-sizing: border-box;
	margin-top: 20px;
	position: absolute;
	z-index: 6;
	width: 100%;
	border-radius: 2em;
	height: auto;
	min-height: 800px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
