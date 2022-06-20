import React from 'react';
import Spinner from '../../spinners/Spinner';
import { ButtonSecondaryStyled, Icon } from './styled';
import { Button } from './types';

const SecondaryButton = ({ value, loading }: Button) => {
	return (
		<ButtonSecondaryStyled>
			{value}

			{loading ? (
				<Spinner size="17" marginLeft="5" />
			) : (
				<Icon
					src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDkwZTAiPjxwYXRoIGQ9Ik02OC44LDE1NC44aC0xMS40NjY2N2MtMi4yMTMwNywwIC00LjIzMTIsLTEuMjc4NTMgLTUuMTgyOTMsLTMuMjc5NDdjLTAuOTUxNzMsLTIuMDAwOTMgLTAuNjU5MzMsLTQuMzY4OCAwLjc0NTMzLC02LjA4ODhsNDguNjMwMTMsLTU5LjQzMTczbC00OC42MzAxMywtNTkuNDM3NDdjLTEuNDA0NjcsLTEuNzE0MjcgLTEuNjkxMzMsLTQuMDgyMTMgLTAuNzQ1MzMsLTYuMDg4OGMwLjk0NiwtMi4wMDY2NyAyLjk2OTg3LC0zLjI3MzczIDUuMTgyOTMsLTMuMjczNzNoMTEuNDY2NjdjMS43MiwwIDMuMzQ4MjcsMC43NzQgNC40Mzc2LDIuMTA0MTNsNTEuNiw2My4wNjY2N2MxLjcyNTczLDIuMTE1NiAxLjcyNTczLDUuMTQ4NTMgMCw3LjI2NDEzbC01MS42LDYzLjA2NjY3Yy0xLjA4OTMzLDEuMzI0NCAtMi43MTc2LDIuMDk4NCAtNC40Mzc2LDIuMDk4NHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
					alt=""
				/>
			)}
		</ButtonSecondaryStyled>
	);
};

export default SecondaryButton;
