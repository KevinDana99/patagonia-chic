import React from 'react';
import {
	ButtonPrimaryStyled,
	BoxLoading,
	ButtonPrimaryContent,
	ButtonPrimaryText,
	Icon,
} from './styled';
import Spinner from '../../spinners/PrimarySpinner';
import { PrimaryButtonType } from './types';

const PrimaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
	IconComponent,
}: PrimaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonPrimaryStyled disabled={disabled} onClick={onClick}>
			{!loading ? (
				<ButtonPrimaryContent>
					{IconComponent && <Icon component={<IconComponent />} />}
					<ButtonPrimaryText>{title}</ButtonPrimaryText>
				</ButtonPrimaryContent>
			) : (
				<BoxLoading>
					<Spinner theme="light" />
				</BoxLoading>
			)}
		</ButtonPrimaryStyled>
	);
};

export default PrimaryButton;
