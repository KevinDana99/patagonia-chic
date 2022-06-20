import { SpinnerStyled } from './styled';
import React from 'react';
import { SpinnerType } from './types';

const Spinner = ({
	size,
	marginLeft,
	marginRight,
	marginBottom,
	marginTop,
}: SpinnerType) => {
	return (
		<SpinnerStyled
			marginLeft={marginLeft}
			marginTop={marginTop}
			marginBottom={marginBottom}
			marginRight={marginRight}
			size={size}
			src={
				'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzBweCIgaGVpZ2h0PSI3MHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1yaW5nLWFsdCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiIGNsYXNzPSJiayIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBzdHJva2U9IiNlZGVkZWQiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBzdHJva2U9IiMyMGMxZWQiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGZyb209IjAiIHRvPSI1MDIiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIxNTAuNiAxMDAuNDsxIDI1MDsxNTAuNiAxMDAuNCIvPjwvY2lyY2xlPjwvc3ZnPg=='
			}
		/>
	);
};

export default Spinner;
