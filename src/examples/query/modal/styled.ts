import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 5;
	height: 100%;
	background-color: #00000062;
`;

export const BoxModal = styled.div`
	margin-top: 100px;
	position: absolute;
	z-index: 6;
	width: 100%;
	border-radius: 2em;
	height: auto;
	min-height: 800px;
	background-color: white;
`;
