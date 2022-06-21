import React from 'react';
import { PrimarySpinnerType } from './types';
import { themesMap } from './themes_map';

const PrimarySpinner = ({
	size = 30,
	theme = 'color',
	className,
}: PrimarySpinnerType) => {
	const { background, color } = themesMap(theme);

	return (
		<svg
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			className={className}
		>
			<rect x="0" y="0" width="100" height="100" fill="none" className="bk" />
			<circle
				cx="50"
				cy="50"
				r="40"
				stroke={background}
				fill="none"
				strokeWidth="10"
				strokeLinecap="round"
			/>
			<circle
				cx="50"
				cy="50"
				r="40"
				stroke={color}
				fill="none"
				strokeWidth="6"
				strokeLinecap="round"
			>
				<animate
					attributeName="stroke-dashoffset"
					dur="2s"
					repeatCount="indefinite"
					from="0"
					to="502"
				/>
				<animate
					attributeName="stroke-dasharray"
					dur="2s"
					repeatCount="indefinite"
					values="150.6 100.4;1 250;150.6 100.4"
				/>
			</circle>
		</svg>
	);
};

export default PrimarySpinner;
