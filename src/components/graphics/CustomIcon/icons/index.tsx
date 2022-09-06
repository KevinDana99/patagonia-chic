import React from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import IslandParadise from './IslandParadise';
import { CustomIconsComponentPropsType } from './types';

const icons = {
	'check-circle': (props: CustomIconsComponentPropsType) => (
		<CheckCircleIcon {...props} />
	),
	island: (props: CustomIconsComponentPropsType) => (
		<IslandParadise {...props} />
	),
} as const;

export default icons;
