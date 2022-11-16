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
	animated?: boolean;
	texts?: ModalTextsType;
};

export type ModalStateType = {
	visible?: boolean;
	closeOnTouchOutside?: boolean;
	animate?: boolean;
};

export type BoxModalType = {
	visible: boolean | undefined;
};

export type ModalContainerType = {
	width?: string;
	animate?: boolean;
};

export type BoxHeaderType = {
	coverImage?: string;
};

export type BoxModalTextType = {
	coverImage?: string;
};

type ModalTextsType = {
	buttonTitle: string;
};

export type ModalStyleType = {
	width?: string;
	animate?: boolean;
};
