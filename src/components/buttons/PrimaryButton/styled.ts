import React from 'react';
import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	user-select: none;
	position: relative;
	display: inline-block;
	padding: 0 16px;
	padding-right: 17px;
	height: 48px;
	outline: none;
	border: none;
	background-size: 200% 200% !important;
	background-color: rgb(35, 132, 229);
	background-image: radial-gradient(
		circle,
		rgba(43, 235, 255, 0.46),
		rgba(59, 178, 249, 0.15) 27.5%,
		rgba(35, 132, 229, 0.3),
		rgb(35, 132, 229) 57.5%,
		rgba(35, 132, 229, 0.81) 75%,
		rgba(168, 88, 224, 0.37)
	);
	color: #fff;
	width: 185px;
	border-radius: 28px;
	margin: 8px 0;
	background-repeat: no-repeat;
	font-weight: 600;
	transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95),
		background-size 800ms ease-out, background-position 800ms ease-out;
	opacity: ${(props) => (props.disabled ? 0.75 : 1)};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	${(props) =>
		!props.disabled
			? `&:hover {
		transform: perspective(1px) scale3d(1.014, 1.014, 1) translateZ(0) !important;
		transition: background-size 800ms ease-out,
			background-position 800ms ease-out;
		background-size: 500% 200% !important;
		background-position-x: 50%;
		
	}`
			: `&:hover`}
`;

export const BoxLoading = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonPrimaryContent = styled.div`
	display: flex;
	justify-content: center;
`;

export const ButtonPrimaryText = styled.div`
	text-align: center;
	width: 100%;
`;

export const Icon = styled(
	({ component, ...props }: { component: JSX.Element; props?: object }) =>
		React.cloneElement(component, props)
)`
	font-size: 16px;
	margin-right: 10px;
`;
