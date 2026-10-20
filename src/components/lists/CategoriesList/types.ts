import { CustomIconType } from '../../graphics/CustomIcon/types';

export type CategoriesListItemType = {
	id: string;
	name: string;
	iconName: CustomIconType['name'];
	isSelected?: boolean;
	disabled?: boolean;
};

export type CategoriesListType = {
	list: Array<CategoriesListItemType>;
	loading?: boolean; // muestra un skeleton
	error?: null; //este despues lo vemos
	selected: string; //id
	onSelectedChange: (itemId: string) => void;
};

export type StyledSwiperSlideType = {
	width?: number;
};
