export const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobile: '425px',
	tablet: '723px',
	tabletL: '850px',
	laptop: '1053px',
	laptopL: '1440px',
	desktop: '1280px',
};

export const deviceSize = {
	mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
	tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
};
