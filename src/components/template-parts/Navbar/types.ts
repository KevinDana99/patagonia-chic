export type NavbarType = {
	cartProductCount?: number | string;
	onClickMenu: React.MouseEventHandler<HTMLLIElement>;
	onClickCart: React.MouseEventHandler<HTMLLIElement>;
	onClickHelp: React.MouseEventHandler<HTMLLIElement>;
	linkHelpText: string;
};

export type NavbarContainerType = {
	colorTheme?: string;
	backgroundTheme?: string;
};

export type NavbarIconType = {
	colorTheme?: string;
};

export type ItemMenuType = {
	onClick: React.MouseEventHandler<HTMLLIElement>;
};
