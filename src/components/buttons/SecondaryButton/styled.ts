import styled from 'styled-components';

export const ButtonSecondaryStyled = styled.button`
	display: inline-block;
	text-align: left;
	white-space: nowrap;
	letter-spacing: -0.01em;
	color: #0090e0;
	font-size: 14px;
	font-weight: 400;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
