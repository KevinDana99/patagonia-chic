import React, { useEffect } from 'react';

export function useOutsideClick(
	ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
	outsideClick: () => void
) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			let isOutsideClick = false;
			if (Array.isArray(ref)) {
				isOutsideClick = ref.reduce(
					(acc, ref) =>
						acc &&
						!!(ref.current && !ref.current.contains(event.target as Node)),
					true
				);
			} else {
				isOutsideClick = !!(
					ref.current && !ref.current.contains(event.target as Node)
				);
			}
			if (isOutsideClick) {
				outsideClick();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [outsideClick, ref]);
}
