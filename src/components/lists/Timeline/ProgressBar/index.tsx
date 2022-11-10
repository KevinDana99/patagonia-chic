import React from 'react';

import { ProgressBarType } from './types';

const ProgressBar = ({ active, Icon }: ProgressBarType) => {
	return (
		<>
			{active && Icon && <Icon />}
			<svg
				width="20"
				height="100"
				viewBox="0 0 20 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M10 100V0" stroke={'#D9D9D9'} strokeWidth="1.5" />
				{!active && <circle cx="10" cy="59" r="3" fill="#D9D9D9" />}
			</svg>
		</>
	);
};

export default ProgressBar;
