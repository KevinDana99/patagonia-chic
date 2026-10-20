import { CustomIconType } from '../../graphics/CustomIcon/types';

export type ItemCardType = {
	title: string;
	keywords?: string[];
	keywordColor?: string;
	icon?: CustomIconType['name'];
};
