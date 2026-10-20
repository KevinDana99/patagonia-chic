import React from 'react';

export type ModalType = {
	renderOpenButton?: { title: string };
	children?: React.ReactNode;
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
	texts?: ModalTextsType;
	className?: string;
};

export type ModalStateType = {
	visible?: boolean;
	closeOnTouchOutside?: boolean;
	animate?: boolean;
};

export type BoxModalType = {
	visible?: boolean;
	animate?: boolean;
	transitionTime: number;
};

export type ModalContainerType = {
	width?: string;
	animate?: boolean;
	transitionTime: number;
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

export type BoxScrollPropsType = {
	isScrollable: boolean;
};
