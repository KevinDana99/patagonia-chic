import React from 'react';
import CheckCircleIcon from './CheckCircleIcon';
import IslandParadise from './IslandParadise';
import GroupCardIcon from './GroupCardIcon';
import RayCardIcon from './RayCardIcon';
import ShipIcon from './ShipIcon';
import CloseIcon from './CloseIcon';
import CheckIcon from './CheckIcon';
import { CustomIconsComponentPropsType } from './types';

const icons = {
	'check-circle': (props: CustomIconsComponentPropsType) => (
		<CheckCircleIcon {...props} />
	),
	island: (props: CustomIconsComponentPropsType) => (
		<IslandParadise {...props} />
	),
	'group-circle': (props: CustomIconsComponentPropsType) => (
		<GroupCardIcon {...props} />
	),
	'ray-circle': (props: CustomIconsComponentPropsType) => (
		<RayCardIcon {...props} />
	),
	'close-icon': (props: CustomIconsComponentPropsType) => (
		<CloseIcon {...props} />
	),
	ship: (props: CustomIconsComponentPropsType) => <ShipIcon {...props} />,
	close: (props: CustomIconsComponentPropsType) => <CloseIcon {...props} />,
	check: (props: CustomIconsComponentPropsType) => <CheckIcon {...props} />,
} as const;

export default icons;
