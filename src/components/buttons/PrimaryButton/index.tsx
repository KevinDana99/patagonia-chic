import React from 'react';
import { ButtonPrimaryStyled, BoxLoading } from './styled';
import Spinner from '../../spinners/PrimarySpinner';
import { Button } from './types';

const PrimaryButton = ({ value, loading }: Button) => {
	return (
		<ButtonPrimaryStyled>
			{!loading ? (
				value
			) : (
				<BoxLoading>
					<Spinner size="30" />
				</BoxLoading>
			)}
		</ButtonPrimaryStyled>
	);
};

export default PrimaryButton;
