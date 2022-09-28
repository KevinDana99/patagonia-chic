export type TertiaryButtonType = {
	className?: string;
	title?: string;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	children?: JSX.Element;
};
