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
		<ButtonPrimaryStyled onClick={onClick}>
			{!loading ? (
				title
			) : (
				<BoxLoading>
					<Spinner size="30" />
				</BoxLoading>
			)}
		</ButtonPrimaryStyled>
	);
};

export default PrimaryButton;
