import { SelectOptionType } from './types';

export const orderStock = (value: SelectOptionType[]) => {
	const inStock: SelectOptionType[] = [];
	const withoutStock: SelectOptionType[] = [];
	for (let index = 0; index < value.length; index++) {
		if (value[index as number].disabled === false) {
			inStock.push(value[index as number]);
		} else {
			withoutStock.push(value[index as number]);
		}
	}
	return withoutStock.concat(inStock);
};
