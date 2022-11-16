import { useState } from 'react';

function useToggle() {
	const [toggle, setToggle] = useState(false);

	const onToggle = () => {
		setToggle(true);
	};

	const offToggle = () => {
		setToggle(false);
	};

	return { onToggle, offToggle, toggle };
}

export default useToggle;
