export type SecondaryButtonType = {
	title: string;
	arrowIconDirection: 'right' | 'left' | 'bottom' | 'top';
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	className?: string;
};
