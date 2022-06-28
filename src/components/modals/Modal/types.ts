import React from 'react';

export type modalType = {
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
};
