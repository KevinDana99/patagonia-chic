import styled from 'styled-components';
import { deviceSize } from '../../../../constants/devicesSizes';
import { FooterText } from '../styled';
import { StyleDevModeType } from '../types';

export const ContainerSocial = styled.div<StyleDevModeType>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;
	margin-bottom: 25px;
	width: 100%;
	background-color: ${({ devMode }) => (devMode ? 'pink' : 'none')};
	@media (${deviceSize.mobile}) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const CopyrightText = styled(FooterText)`
	display: flex;
	justify-self: flex-start;
	@media (${deviceSize.mobile}) {
		order: 1;
	}
`;

export const IconContainer = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
	@media (${deviceSize.mobile}) {
		order: 0;
		margin-bottom: 21.65px;
	}
`;
