import { SelectOptionType } from './types';

export const orderStock = (value: SelectOptionType[]) => {
	const inStock: SelectOptionType[] = [];
	const withoutStock: SelectOptionType[] = [];
	for (let index = 0; index < value.length; index++) {
		if (value[index].disabled === false) {
			inStock.push(value[index]);
		} else {
			withoutStock.push(value[index]);
		}
	}
	return withoutStock.concat(inStock);
};
