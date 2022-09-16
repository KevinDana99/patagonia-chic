export type TextWeightsType =
	| 'ultra-light'
	| 'regular'
	| 'medium'
	| 'semi-bold'
	| 'bold'
	| 'heavy';

export type FontFamilyType = 'SF Pro Text';

export type StyledTextPropsType = {
	fontFamily: FontFamilyType;
	size: number;
	color: string;
	weight: TextWeightsType;
	italic: boolean;
};

export type TextPropsType = {
	className?: string;
	children?: string;
	fontFamily?: FontFamilyType;
	size?: number;
	color?: string;
	weight?: TextWeightsType | number;
	italic?: boolean;
};
