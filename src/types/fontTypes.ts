export type FontFamilyType = 'SF Pro Text';

export type TextWeightsType =
	| 'ultra-light'
	| 'medium-light'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semi-bold'
	| 'bold'
	| 'heavy';

export type StyledTextPropsType = {
	fontFamily?: string;
	size?: number;
	color?: string;
	weight?: TextWeightsType;
	italic?: boolean;
	center?: boolean;
	right?: boolean;
};
