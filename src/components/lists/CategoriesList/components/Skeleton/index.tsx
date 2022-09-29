import React from 'react';
import { Container, StyledContentLoader } from './styled';

const ITEMS_TO_SHOW = 8;
const ITEM_WIDTH = 75.5;
const ITEMS_MARGIN = 35;

const CategoriesListSkeleton = () => (
	<Container>
		<StyledContentLoader
			speed={2}
			width={1100}
			height="65"
			viewBox="0 0 1100 65"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			{new Array(ITEMS_TO_SHOW).fill(null).map((_, index) => (
				<>
					<circle
						cx={`${42 + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
						cy="12"
						r="12"
					/>
					<rect
						x={`${5 + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
						y="33"
						rx="5"
						ry="5"
						width="76"
						height="10"
					/>
					<rect
						x={`${28 + index * (ITEM_WIDTH + ITEMS_MARGIN)}`}
						y="48"
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

export default CategoriesListSkeleton;
