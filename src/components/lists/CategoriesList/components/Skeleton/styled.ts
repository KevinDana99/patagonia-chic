import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 70px;
	overflow: hidden;
	position: relative;
`;

export const StyledContentLoader = styled(ContentLoader)`
	position: absolute;
	top: 0;
	left: 0;
`;
