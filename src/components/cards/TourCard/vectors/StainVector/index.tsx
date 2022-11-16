import React from 'react';

import { StainVectorType } from './types';

const StainVector = ({ className, color = '#1079E3' }: StainVectorType) => {
	return (
		<svg
			className={className}
			width="141"
			height="95"
			viewBox="0 0 141 95"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M120.384 -34.2321C134.953 -21.6029 148.957 -8.4989 154.409 8.11849C159.766 24.8308 156.57 45.1515 146.983 61.674C137.49 78.1015 121.512 90.7307 104.688 93.8642C87.8637 96.9978 70.0995 90.6357 51.9594 84.4635C33.8194 78.1964 15.3033 72.1192 6.75022 59.2051C-1.80288 46.291 -0.39303 26.5401 4.0245 8.3084C8.34805 -9.82829 15.6793 -26.5406 28.086 -39.6446C40.4926 -52.6537 58.0688 -62.0544 74.3291 -60.63C90.6833 -59.2057 105.816 -46.8613 120.384 -34.2321Z"
				fill={color}
			/>
		</svg>
	);
};

export default StainVector;
