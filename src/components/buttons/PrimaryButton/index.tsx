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
import Text from '../../texts/Text';

const PrimaryButton = ({
	title,
	loading = false,
	onClick,
	disabled = false,
	IconComponent,
	className,
	color,
}: PrimaryButtonType) => {
	disabled = disabled || loading;
	return (
		<ButtonPrimaryStyled
			disabled={disabled}
			onClick={onClick}
			className={className}
		>
			{!loading ? (
				<ButtonPrimaryContent>
					{IconComponent && <Icon component={<IconComponent />} />}
					<ButtonPrimaryText>
						<Text weight={'semi-bold'} color={color || '#fff'}>
							{title}
						</Text>
					</ButtonPrimaryText>
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
