export const size = {
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
	mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
	tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
};
