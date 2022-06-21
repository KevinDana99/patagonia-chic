import React from 'react';
import { ButtonPrimaryStyled, BoxLoading } from './styled';
import Spinner from '../../spinners/PrimarySpinner';
import { PrimaryButtonType } from './types';

const PrimaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
}: PrimaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonPrimaryStyled disabled={disabled} onClick={onClick}>
			{!loading ? (
				title
			) : (
				<BoxLoading>
					<Spinner theme="light" />
				</BoxLoading>
			)}
		</ButtonPrimaryStyled>
	);
};

export default PrimaryButton;
