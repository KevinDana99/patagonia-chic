export type SearchQueryInputPropsType = {
	label: string;
	placeholder: string;
	inputTextValue?: string;
	onInputTextChange?: (newText: string) => void;
	onClearFieldClicked?: () => void;
	onFocusChange?: (isFocused: boolean) => void;
	onlyClick?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	isError?: boolean;
	isFocused?: boolean;
};

export type InputContainerType = {
	onlyClick: boolean;
	isFocused: boolean;
};

export type TextInputType = {
	isError: boolean;
	onlyClick: boolean;
};
