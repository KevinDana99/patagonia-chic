import { useEffect, useState } from 'react';

export const useDimensions = <T extends HTMLElement>(
	ref: React.RefObject<T>
) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const { current } = ref;
			const resizeObserver = new ResizeObserver(() => {
				setWidth(current.offsetWidth || 0);
				setHeight(current.offsetHeight || 0);
			});
			ref.current && resizeObserver.observe(current);

			return () => resizeObserver.unobserve(current);
		}
	}, [ref]);

	return { width, height };
};
