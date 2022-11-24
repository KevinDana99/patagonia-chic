import { TextWeightsType } from '../../../types/fontTypes';

export type TextPropsType = {
	className?: string;
	children?: string;
	fontFamily?: string;
	size?: number;
	color?: string;
	weight?: TextWeightsType;
	italic?: boolean;
	center?: boolean;
	right?: boolean;
	style?: React.CSSProperties;
};
