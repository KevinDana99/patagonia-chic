import IconCheck from '../../../assets/images/icons/IconCheck';
export const selectedIcon = (icon: string, color: string, size: number) => {
	switch (icon) {
		case 'IconCheck':
			return IconCheck({ color, size });

		default:
			break;
	}
};
