import React, { FC } from 'react';

export type modalType = {
	visible?: boolean;
	title?: string;
	coverImage?: string;
	headerText?: string;
	Children?: React.FC;
	onClose?: () => void;
	onOpen?: () => void;
	closeOnTouchOutside?: boolean;
	closeAction?: React.MouseEventHandler<HTMLButtonElement>;
	disableClose?: boolean;
};
