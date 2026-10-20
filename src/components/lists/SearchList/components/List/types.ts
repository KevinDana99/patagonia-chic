import { ListItemType } from '../../types';

export type ListPropsType = {
	list: ListItemType[];
	handleItemSelected: (selectedItem: ListItemType) => void;
	horizontalPadding: number;
	edgesItemsAddedPadding: number;
	showItemSubtitle: boolean;
};
