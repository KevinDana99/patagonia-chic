import React from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import GroupCardIcon from './GroupCardIcon';
import RayCardIcon from './RayCardIcon';
import { CustomIconsComponentPropsType } from './types';

const icons = {
	'check-circle': (props: CustomIconsComponentPropsType) => (
		<CheckCircleIcon {...props} />
	),
	'group-circle': (props: CustomIconsComponentPropsType) => (
		<GroupCardIcon {...props} />
	),
	'ray-circle': (props: CustomIconsComponentPropsType) => (
		<RayCardIcon {...props} />
	),
} as const;

export default icons;
