export const themesMap = (name: string) => {
	switch (name) {
		case 'light':
			return {
				background: 'transparent',
				color: '#ededed',
			};
		default:
			return {
				background: '#ededed',
				color: '#20c1ed',
			};
	}
};
