import { useState } from 'react';

export const useForceReRender = () => {
	const [value, setValue] = useState<number>(0); // integer state
	return () => setValue(value + 1); // update state to force render
	// An function that increment 👆🏻 the previous state like here
	// is better than directly setting `value + 1`
};
