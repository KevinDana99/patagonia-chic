import styled from 'styled-components';

export const Container = styled.div<{ height: number }>`
	height: ${({ height }) => height}px;
	width: 300px;
	padding: 0;
	overflow: hidden;
`;
