export const themesMap = (name: string) => {
	switch (name) {
		case 'transparent':
			return {
				background: 'transparent',
				color: '#FFFFFF',
			};
		default:
			return {
				background: 'rgba(255, 255, 255, 0.72)',
				color: '#3B3B3B',
			};
	}
};
