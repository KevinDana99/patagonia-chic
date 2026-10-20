export type NavbarType = {
	cartProductCount?: number | string;
	onClickLogo: React.MouseEventHandler<HTMLDivElement>;
	onClickMenu: React.MouseEventHandler<HTMLLIElement>;
	onClickCart: React.MouseEventHandler<HTMLLIElement>;
	onClickHelp: React.MouseEventHandler<HTMLLIElement>;
	texts: NavbarTexts;
	initialLightTheme: boolean;
};

export type NavbarContainerType = {
	colorTheme?: string;
	backgroundTheme?: string;
	initialTransparent?: boolean;
};

export type NavbarIconType = {
	colorTheme?: string;
};

export type ItemMenuType = {
	onClick: React.MouseEventHandler<HTMLLIElement>;
};

export type LogoClickType = {
	onClick: React.MouseEventHandler<HTMLDivElement>;
};

export type NavbarTexts = {
	helpOption: string;
};
