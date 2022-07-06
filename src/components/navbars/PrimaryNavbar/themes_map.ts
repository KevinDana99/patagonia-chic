export const themesMap = (name: string) => {
	switch (name) {
		case 'transparent':
			return {
				background: 'transparent',
				color: '#FFFFFF',
				languageBackground: 'none',
			};
		default:
			return {
				background: 'rgba(255, 255, 255, 1)',
				color: '#3B3B3B',
				languageBackground: 'rgba(241, 244, 247, 1)',
			};
	}
};
