import React, { useEffect, useState } from 'react';
import { useIsElementScrollable } from '../../../../hooks/useIsElementScrollable';

export const useShowOverflowGradient = (
	scrollDivRef: React.RefObject<HTMLDivElement>
): [boolean, React.UIEventHandler<HTMLDivElement>, boolean] => {
	const isScrollable = useIsElementScrollable(scrollDivRef);
	const [showOverflowGradient, setShowOverflowGradient] = useState(false);
	const [scrollTop, setScrollTop] = useState(0);

	const setScrollTopFromOutside: React.UIEventHandler<HTMLDivElement> = (e) => {
		setScrollTop(e.currentTarget.scrollTop);
	};

	useEffect(() => {
		if (scrollDivRef.current) {
			const { current } = scrollDivRef;
			setShowOverflowGradient(
				isScrollable && current.scrollHeight > current.clientHeight + scrollTop
			);
		}
	}, [scrollDivRef, scrollTop, isScrollable]);

	return [showOverflowGradient, setScrollTopFromOutside, isScrollable];
};
