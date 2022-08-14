const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '600px',
	tabletL: '850px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
};

export const deviceSize = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet}) and (max-width: ${size.tabletL})`,
};
