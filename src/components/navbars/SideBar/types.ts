export type SideBarType = { closeAction: () => void };

export type ViewType = {
	views: React.FC[];
	props: Object;
};

export type SidebarPropsType = {
	next?: (a?: React.FC, b?: Object) => void;
};
