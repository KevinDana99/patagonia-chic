import styled from 'styled-components';
import { FooterText } from '../styled';

export const ContainerSocial = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;
	margin-bottom: 25px;
	width: 100%;
`;

export const CopyrightText = styled(FooterText)`
	display: flex;
	justify-self: flex-start;
`;

export const IconContainer = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
`;
