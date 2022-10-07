export type SearchQueryInputPropsType = {
	label: string;
	placeholder: string;
	inputTextValue?: string;
	onInputTextChange?: (newText: string) => void;
	onClearFieldClicked?: () => void;
	onFocusChange?: (isFocused: boolean) => void;
};
