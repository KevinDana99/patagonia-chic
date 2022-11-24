import { useCallback, useEffect, useState } from 'react';

const useKeyboardNavigation = (
	listLength: number,
	selectedAction: (selectedIndex: number) => void
): [number, React.Dispatch<React.SetStateAction<number>>] => {
	const [index, setNewIndex] = useState<number>(-1);

	const keyHandler = useCallback(
		({ key }: KeyboardEvent) => {
			let newItemIndex = index;

			switch (key) {
				case 'Enter':
					if (index > -1) selectedAction?.(index);
					break;
				case 'ArrowDown':
					if (index < listLength - 1) {
						newItemIndex++;
					} else {
						newItemIndex = 0;
					}
					break;
				case 'ArrowUp':
					if (index > 0) {
						newItemIndex--;
					} else {
						newItemIndex = listLength - 1;
					}
					break;
				default: {
					newItemIndex = -1;
				}
			}

			setNewIndex(newItemIndex);
		},
		[selectedAction, index, listLength]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyHandler);
		return () => {
			document.removeEventListener('keydown', keyHandler);
		};
	}, [keyHandler]);

	return [index, setNewIndex];
};

export default useKeyboardNavigation;
