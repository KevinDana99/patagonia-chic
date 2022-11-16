import React, { useEffect } from 'react';

function useOutsideClick(
	ref: React.RefObject<HTMLDivElement>,
	outsideClick: () => void
) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				outsideClick();
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [outsideClick, ref]);
}

export default useOutsideClick;
