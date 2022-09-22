import React from 'react';

export type ModalType = {
	renderOpenButton?: boolean;
	width?: string;
	visible?: boolean;
	title?: string;
	coverImage?: string;
	headerText?: string;
	Children?: React.FC;
	onClose?: () => void;
	onOpen?: () => void;
	closeOnTouchOutside?: boolean;
	closeAction?: () => void;
	disableClose?: boolean;
	animate?: boolean;
	texts: ModalTextsType;
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
