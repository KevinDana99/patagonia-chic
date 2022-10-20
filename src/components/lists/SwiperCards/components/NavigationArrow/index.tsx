import React from 'react';
import { GradientContainer, ArrowContainer } from './styled';
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io';
import { NavigationArrowType } from './types';

const NavigationArrow = ({
	lastPosition,
	right,
	left,
	className,
	mobile,
	onClick,
}: NavigationArrowType) => (
	<GradientContainer
		onClick={onClick}
		className={className}
		right={right}
		left={left}
		lastPosition
		mobile={mobile}
	>
		{!mobile && (
			<ArrowContainer>
				<ArrowIcon size={30} color="#717171" />
			</ArrowContainer>
		)}
	</GradientContainer>
);

export default NavigationArrow;
