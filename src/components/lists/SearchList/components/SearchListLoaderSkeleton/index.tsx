import React from 'react';
import ContentLoader from 'react-content-loader';
import { SearchListSkeletonPropsType } from './types';

const MARGIN_TOP = 20;

const SearchListSkeleton = ({
	itemsCount = 5,
}: SearchListSkeletonPropsType) => (
	<ContentLoader
		speed={2}
		width={300}
		height={380}
		viewBox="0 0 300 380"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		{new Array(itemsCount).fill(null).map((_, idx) => (
			<>
				<rect
					x="0"
					y={idx * (MARGIN_TOP + 50)}
					rx="8"
					ry="8"
					width="50"
					height="50"
				/>
				<rect
					x="62"
					y={idx * (MARGIN_TOP + 50) + 11}
					rx="7"
					ry="7"
					width="88"
					height="14"
				/>
				<rect
					x="62"
					y={idx * (MARGIN_TOP + 50) + 30}
					rx="7"
					ry="7"
					width="120"
					height="14"
				/>
			</>
		))}
	</ContentLoader>
);

export default SearchListSkeleton;
