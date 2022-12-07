export type PrimaryCardType = {
	children?: JSX.Element | string | JSX.Element[];
	hover?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type PrimaryCardStyleType = {
	hover?: boolean;
};
