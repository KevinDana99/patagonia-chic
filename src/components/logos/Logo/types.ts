export type AlignLogoType = 'left' | 'center' | 'right';

export type ThemeLogoType = 'light' | 'color';

export type LogoType = {
	size: number;
	theme?: ThemeLogoType;
	containerFullWidth?: boolean;
	align?: AlignLogoType;
	onClick?: () => void;
};
