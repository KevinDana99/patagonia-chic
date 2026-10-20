import { CustomIconType } from '../../../../graphics/CustomIcon/types';

export type SwiperItemType = {
	id: string;
	title: string;
	keywordColor?: string;
	keywords?: string[];
	icon?: CustomIconType['name'];
	isSelected?: boolean;
	disabled?: boolean;
	selected?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type ItemCategoryContainerType = {
	selected?: boolean;
	disabled?: boolean;
};
