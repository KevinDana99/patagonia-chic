import styled from 'styled-components';
import { deviceSize } from '../../../../constants/devicesSizes';
import { FooterText } from '../styled';
import { StyleDevModeType } from '../types';

export const ContainerSectionCommon = styled.div<StyleDevModeType>`
	margin-right: 21px;
	width: 215px;
	background-color: ${({ devMode }) => (devMode ? 'violet' : 'none')};
	display: flex;
	@media (${deviceSize.tablet}) {
		display: none;
	}
	@media (${deviceSize.mobile}) {
		display: none;
	}
`;

export const DesktopSectionCommon = styled.div``;

export const SectionLabel = styled(FooterText)`
	margin: 13px 0px;
	font-size: 15px;
`;

export const SectionTitle = styled.h3`
	margin-top: 2.5rem;
	font-weight: 600;
	font-size: 15px;
`;
