import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const AvailableElement = styled.div`
	margin: 0 auto;
	width: 6px;
	height: 6px;
	border-radius: 3px;
	background-color: #3bc053;
`;

export const UnavailableElement = styled.div`
	width: 16px;
	height: 1px;
	background-color: #999999;
`;

export const AvailabilityReferenceContainer = styled.div`
	margin: 25px 0 10px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
