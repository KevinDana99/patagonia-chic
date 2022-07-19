export const getViewport = (viewport: number) => {
	if (viewport < 500) {
		return 'MOBILE';
	} else if (viewport < 900) {
		return 'TABLET';
	} else {
		return 'DESKTOP';
	}
};
