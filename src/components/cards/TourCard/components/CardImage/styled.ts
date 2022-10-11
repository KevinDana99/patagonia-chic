import styled from 'styled-components';
import { ExcursionCardStyleType } from '../../types';
import StainVector from '../../vectors/StainVector';

export const ContainerImage = styled.div<ExcursionCardStyleType>`
	width: 100%;
	height: 235px;
	background-image: url(${(props) => props.coverImage && props.coverImage});
	object-fit: ${(props) => props.coverImage && 'cover'};
	background-repeat: ${(props) => props.coverImage && 'no-repeat'};
	background-position: center;
`;

export const ContainerVector = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 1;
	width: 100%;
`;

export const VectorCard = styled(StainVector)`
	position: relative;
`;

export const TextVector = styled.div`
	text-transform: capitalize;
	font-size: 15px;
	width: 105px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	position: absolute;
`;

export const TextVectorDay = styled.div`
	position: relative;
	right: 25px;
`;

export const TextVectorMonth = styled.div`
	position: relative;
	right: 20px;
`;
