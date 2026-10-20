import React from 'react';
import { CustomStyleIconType } from '../types';

const CheckIcon = ({ color, size }: CustomStyleIconType) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3.74375 10.7695L0.33279 7.21781C0.105393 6.95793 0.0295937 6.43817 0.33279 6.09167C0.635987 5.74517 1.09078 5.74517 1.39398 6.09167L4.27435 9.03695L10.5657 1.24062C10.8689 0.894116 11.3237 0.894117 11.6269 1.15399C11.9301 1.41387 11.9301 1.93363 11.7027 2.28013L4.95654 10.7695C4.80494 10.9427 4.65334 11.0293 4.42595 11.0293C4.04695 10.9427 3.89535 10.8561 3.74375 10.7695Z"
				fill={color}
			/>
		</svg>
	);
};

export default CheckIcon;
