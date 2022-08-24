import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { deviceSize, size } from '../../../consntants/devicesSizes';

export const Container = styled.div`
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	width: 100%;
	flex-direction: column;
	position: absolute;
	background-color: rgba(35, 37, 38, 0.7);
	top: 0px;
	height: 100%;
	z-index: 1;
	left: 0px;
	@media ((min-width: ${size.tabletL}) and (max-width: ${size.desktop})) {
		display: none;
	}
`;

export const CloseModalContainer = styled.div`
	display: flex;
	padding: 20px 0px;
	justify-content: flex-end;
	width: 100%;
	border-bottom: solid 1px #d3d3d3;
	margin-bottom: 20px;
`;

export const CloseModalIcon = styled(IoClose)`
	color: #d3d3d3;
	margin-right: 20px;
	font-size: 30px;
`;

export const PlaceListMobileContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	margin: auto;
	margin-top: 50px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 0px;
	z-index: 1;
	border-radius: 15px;
	max-width: 700px;

	@media ((min-width: ${size.tablet}) and (max-width: ${size.desktop})) {
		max-height: 500px;
	}
`;
