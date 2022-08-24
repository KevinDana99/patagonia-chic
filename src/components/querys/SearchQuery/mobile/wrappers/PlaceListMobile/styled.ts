import styled from 'styled-components';
import { DisableSearchType } from '../../../types';
import { deviceSize, size } from './../../../../../../consntants/devicesSizes';

export const Label = styled.p`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 12px;
	font-weight: 600;
	margin-bottom: 0;
	margin-top: 11px;
	@media ${deviceSize.mobileL} {
		text-align: start;
	}
`;

export const MobileLabel = styled(Label)`
	@media ${deviceSize.mobileL} {
		text-align: center;
	}
`;

export const Input = styled.input`
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Ubuntu, 'Helvetica Neue', 'Lucida Grande', sans-serif;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 600;
	margin-top: 0;
	margin-bottom: 11px;
	color: #000000;
	border: none;
	outline: none;
	max-width: 130px;

	&::placeholder {
		font-weight: 100;
	}
`;

export const MobileInput = styled(Input)`
	max-width: 100%;
	text-align: center;
	margin: 0;
	z-index: 1;
	-webkit-user-select: initial;
	-khtml-user-select: initial;
	-moz-user-select: initial;
	-ms-user-select: initial;
	user-select: initial;
`;
