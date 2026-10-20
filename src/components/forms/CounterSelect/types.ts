export type CounterSelectType = {
	onChange: (counter: number) => void;
	texts: CounterSelectTextsType;
	value: number | null;
};

export type CounterSelectTextsType = {
	selectQuantity: string;
};
