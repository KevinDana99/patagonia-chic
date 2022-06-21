import React from 'react';
import { ButtonPrimaryStyled, BoxLoading } from './styled';
import Spinner from '../../spinners/PrimarySpinner';
import { PrimaryButtonType } from './types';

const PrimaryButton = ({
	title,
	loading = false,
	onClick,
}: PrimaryButtonType) => {
	return (
		<ButtonPrimaryStyled disabled={loading} onClick={onClick}>
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
