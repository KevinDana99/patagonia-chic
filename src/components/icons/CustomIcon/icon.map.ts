import { IconCheck, IconCheckType } from '../../../assets/images/icons';
export const selectedIcon = (icon: string, color: string, size: number) => {
	switch (icon) {
		case IconCheckType:
			return IconCheck({ color, size });

		default:
			break;
	}
};
