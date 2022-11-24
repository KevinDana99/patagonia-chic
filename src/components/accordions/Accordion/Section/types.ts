import React from 'react';

export type SectionType = {
	children: JSX.Element;
};

export type SectionBoxTitleType = {
	children?: JSX.Element;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type SectionTitleType = {
	children?: JSX.Element;
	title?: string;
};

export type SectionLinkType = {
	children?: JSX.Element;
	href: string;
	key: string | number;
	target?: string;
};

export type SectionLabelType = {
	label?: string;
};
