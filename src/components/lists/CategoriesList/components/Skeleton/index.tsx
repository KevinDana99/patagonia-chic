import React from 'react';
import { Container, StyledContentLoader } from './styled';

const ITEM_WIDTH = 90;
const ITEMS_MARGIN = 10.12;
const LEFT_OFFSET = 6;

const CategoriesListSkeleton = () => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [loaderWidth, setLoaderWidth] = React.useState(0);

	React.useEffect(() => {
		setLoaderWidth(containerRef.current?.offsetWidth ?? 0);
	}, [containerRef]);

	const itemsToShowCount = Math.round(
		loaderWidth / (LEFT_OFFSET + ITEM_WIDTH + ITEMS_MARGIN)
	);

	return (
		<Container ref={containerRef}>
			<StyledContentLoader
				speed={2}
				width={1100}
				height={70}
				viewBox="0 0 1100 70"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
			>
				{new Array(itemsToShowCount).fill(null).map((_, index) => (
					<>
						<circle
							cx={`${LEFT_OFFSET + 37 + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
							cy="12"
							r="12"
						/>
						<rect
							x={`${LEFT_OFFSET + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
							y="33"
							rx="5"
							ry="5"
							width="76"
							height="10"
						/>
						<rect
							x={`${LEFT_OFFSET + 23 + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
							y="52"
							rx="5"
							ry="5"
							width="30"
							height="10"
						/>
					</>
				))}
			</StyledContentLoader>
		</Container>
	);
};

export default CategoriesListSkeleton;
