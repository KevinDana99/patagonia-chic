export type ModalType = {
	renderOpenButton?: { title: string };
	children?: JSX.Element | string;
	width?: string;
	visible?: boolean;
	title?: string;
	coverImage?: string;
	headerText?: string;
	onClose?: () => void;
	onOpen?: () => void;
	closeOnTouchOutside?: boolean;
	closeAction?: () => void;
	disableClose?: boolean;
	animate?: boolean;
};

export type ModalStyleType = {
	width?: string;
	animate?: boolean;
};
