export type LabelLinkType = {
	label: string;
	url: string;
	target?: string;
};

export type SectionType = {
	title: string;
	label: LabelLinkType[];
};
