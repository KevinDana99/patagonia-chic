export type SideBarType = {
	closeAction?: () => void;
	activeSidebar?: boolean;
};

export type ViewType = {
	views: React.FC[];
	props: Object;
};

export type SidebarPropsType = {
	next?: (a?: React.FC, b?: Object) => void;
};
