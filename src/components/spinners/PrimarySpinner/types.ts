import React from 'react';

export type PrimarySpinnerType = {
	className?: string;
	size?: number;
	style?: React.SVGAttributes<SVGSVGElement>['style'];
	theme?: 'color' | 'light';
};

export type ThemeType = {
	background: string;
	color: string;
};
