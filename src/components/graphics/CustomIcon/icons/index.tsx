import React from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import { CustomIconsComponentPropsType } from './types';

const icons = {
	'check-circle': (props: CustomIconsComponentPropsType) => (
		<CheckCircleIcon {...props} />
	),
} as const;

export default icons;
