export type PlacesListType = {
	id: string;
	name: string;
	img?: string;
	province?: string;
	category?: string;
	country?: string;
	keywords?: Array<string>;
	featured?: boolean;
};

export type SearchQueryInputPropsType = {
	label: string;
	placeholder: string;
	inputTextValue?: string;
	onInputTextChange?: (newText: string) => void;
};
