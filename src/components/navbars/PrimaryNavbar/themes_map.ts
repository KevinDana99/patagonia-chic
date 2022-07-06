export const themesMap = (name: string) => {
	switch (name) {
		case 'transparent':
			return {
				background: 'transparent',
				color: '#ededed',
			};
		default:
			return {
				background: '#ededed',
				color: '#000000',
			};
	}
};
