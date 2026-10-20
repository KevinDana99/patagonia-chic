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
	selected: string;
	onSelectedChange: (itemId: string) => void;
	loading?: boolean;
	error?: null;
	ITEM_TARGET_SIZE?: number;
	OFFSET?: number;
	MARGIN?: number;
};

export type StyledSwiperSlideType = {
	width?: number;
};
