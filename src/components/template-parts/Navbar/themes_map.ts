export const themesMap = (name: string) => {
	switch (name) {
		case 'transparent':
			return {
				background:
					'linear-gradient( 180deg, rgba(0, 0, 0, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
				color: '#FFFFFF',
			};

		default:
			return {
				background: 'rgba(255, 255, 255, 0.72)',
				color: '#3B3B3B',
			};
	}
};
