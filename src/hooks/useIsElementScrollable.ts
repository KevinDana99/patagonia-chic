import { useEffect, useState } from 'react';

export const useIsElementScrollable = <T extends HTMLElement>(
	ref: React.RefObject<T>
) => {
	const [isScrollable, setIsScrollable] = useState(false);
	if (
		!isScrollable &&
		ref.current &&
		ref.current.scrollHeight > ref.current.clientHeight
	) {
		setIsScrollable(true);
	}

	useEffect(() => {
		if (ref.current) {
			const { current } = ref;
			const resizeObserver = new ResizeObserver(() => {
				setIsScrollable(current.scrollHeight > current.clientHeight);
			});
			ref.current && resizeObserver.observe(current);

			return () => resizeObserver.unobserve(current);
		}
	}, [ref]);

	return isScrollable;
};
