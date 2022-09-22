import { useState } from 'react';

const useToggle = (params: string | null) => {
	const [toggle, setToggle] = useState(false);

	const onToggle = () => {
		setToggle(true);
	};

	const offToggle = () => {
		setToggle(false);
	};

	return { onToggle, offToggle, toggle };
};

export default useToggle;
