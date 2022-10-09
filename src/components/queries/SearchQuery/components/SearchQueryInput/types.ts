export type SearchQueryInputPropsType = {
	label: string;
	placeholder: string;
	inputTextValue?: string;
	onInputTextChange?: (newText: string) => void;
	onClearFieldClicked?: () => void;
	onFocusChange?: (isFocused: boolean) => void;
	onlyClick?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type InputContainerType = {
	onlyClick: boolean;
	isFocused: boolean;
};
