export type SideBarType = { closeAction: () => void };

export type ViewType = React.FC[];

export type SidebarPropsType = {
	next?: (a?: React.FC, b?: Object) => void;
};
