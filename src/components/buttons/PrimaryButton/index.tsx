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
import { PrimaryButtonLight } from './themes/styled';

const components = {
	color: ButtonPrimaryStyled,
	mono: PrimaryButtonLight,
};

const PrimaryButton = (props: PrimaryButtonType) => {
	const {
		title,
		loading = false,
		onClick,
		disabled = false,
		IconComponent,
		className,
		theme = 'color',
		color = '#3b3b3b',
	} = props;

	const ButtonComponent = components[theme];

	return (
		<ButtonComponent
			disabled={loading || disabled}
			onClick={onClick}
			className={className}
			color={color}
		>
			{!loading ? (
				<ButtonPrimaryContent>
					<ButtonPrimaryText>
						{IconComponent && <Icon component={<IconComponent />} />}
						<Text>{title}</Text>
					</ButtonPrimaryText>
				</ButtonPrimaryContent>
			) : (
				<BoxLoading>
					<Spinner theme="light" />
				</BoxLoading>
			)}
		</ButtonComponent>
	);
};

export default PrimaryButton;
