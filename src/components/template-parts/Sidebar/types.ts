import React from 'react';
import { LanguageType } from '../Footer/types';

export type SideBarType = {
	closeAction?: () => void;
	activeSidebar?: boolean;
	mapToViews?: Array<{
		name: string;
		content: React.FC;
		navigationNode?: Array<{ name: string; content: React.FC }>;
		RenderView?: React.FC;
		onClick?: () => void;
	}>;
	language: LanguageType; //TO DO: Move to independent component
};

export type SidebarComponentType = {
	closeAction?: () => void;
	activeSidebar?: boolean;
};

export type ViewType = {
	views: React.FC[];
	props: ViewPropsType;
};

export type ViewPropsType = Array<{
	title?: string;
	navigationNode?: Array<{ name: string; content: JSX.Element }>;
	next?: (a?: React.FC, b?: Object) => void;
	RenderView?: React.FC;
}>;

export type SidebarPropsType = {
	next?: (a?: React.FC, b?: Object) => void;
	navigationNode?: Array<{
		name: string;
		content: React.FC;
		navigationNode: Array<{ name: string; content: JSX.Element }>;
		onClick?: () => void;
		RenderView?: React.FC;
	}>;
	RenderView?: React.FC;
};
