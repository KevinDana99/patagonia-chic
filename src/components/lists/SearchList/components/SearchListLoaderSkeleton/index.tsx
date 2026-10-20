import React from 'react';
import ContentLoader from 'react-content-loader';
import { Container } from './styled';
import { SearchListSkeletonPropsType } from './types';

const MARGIN_TOP = 20;

const SearchListSkeleton = ({
	itemsCount = 5,
}: SearchListSkeletonPropsType) => (
	<Container height={itemsCount * 50 + (itemsCount - 1) * MARGIN_TOP}>
		<ContentLoader
			speed={2}
			width={300}
			height={800}
			viewBox="0 0 300 800"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			{new Array(itemsCount).fill(null).map((_, idx) => (
				<>
					<rect
						x="0"
						y={idx * (MARGIN_TOP + 45)}
						rx="8"
						ry="8"
						width="45"
						height="45"
					/>
					<rect
						x="57"
						y={idx * (MARGIN_TOP + 45) + 6}
						rx="7"
						ry="7"
						width="88"
						height="14"
					/>
					<rect
						x="57"
						y={idx * (MARGIN_TOP + 45) + 25}
						rx="7"
						ry="7"
						width="120"
						height="14"
					/>
				</>
			))}
		</ContentLoader>
	</Container>
);

export default SearchListSkeleton;
