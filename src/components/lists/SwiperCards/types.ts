import { CustomIconType } from '../../graphics/CustomIcon/types';

export type SwiperListCardType = {
	id: string;
	title: string;
	keywordColor?: string;
	keywords?: string[];
	icon?: CustomIconType['name'];
	isSelected?: boolean;
	disabled?: boolean;
};

export type SwiperCardsType = {
	list: Array<SwiperListCardType>;
	loading?: boolean; // muestra un skeleton
	error?: null; //este despues lo vemos
	selected: string; //id
	onSelectedChange: (itemId: string) => void;
};

export type StyledSwiperSlideType = {
	width?: number;
};
