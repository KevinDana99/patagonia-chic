import { CustomIconType } from '../../../../graphics/CustomIcon/types';

export type ItemCategoryType = {
	name: string;
	iconName: CustomIconType['name'];
	selected?: boolean;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type ItemCategoryContainerType = {
	selected?: boolean;
	disabled?: boolean;
};
