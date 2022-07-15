import React from 'react';

export type SideBarType = {
	closeAction?: () => void;
	activeSidebar?: boolean;
	mapToViews?: Array<{
		name: string;
		content: React.FC;
		navigationNode?: Array<{ name: string; content: React.FC }>;
		RenderView?: React.FC;
	}>;
};
export type ViewType = {
	views: React.FC[];
	props: Array<{}>;
};

export type SidebarPropsType = {
	next?: (a?: React.FC, b?: Object) => void;
	navigationNode?: Array<{
		name: string;
		content: React.FC;
		navigationNode: Array<{ name: string; content: JSX.Element }>;
	}>;
	RenderView?: React.FC;
};
