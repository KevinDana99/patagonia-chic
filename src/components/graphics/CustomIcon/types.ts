import icons from './icons';

export type CustomIconType = {
	name: keyof typeof icons;
	className?: string;
	color?: string;
	size?: number;
};

export type CustomStyleIconType = {
	color?: string;
	size?: number;
};
