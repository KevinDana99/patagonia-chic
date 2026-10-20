type SideConditional<T> = T extends false | undefined ? true : false;

export type NavigationArrowType = {
	right?: boolean;
	left?: SideConditional<NavigationArrowType['right']>;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	mobile?: boolean;
	position?: number;
	lastPosition?: boolean;
	offSet?: number;
};
