import React from 'react';
import { GradientContainer, ArrowContainer } from './styled';
import { IoIosArrowForward as ArrowIcon } from 'react-icons/io';
import { NavigationArrowType } from './types';

const NavigationArrow = ({
	right,
	left,
	className,
	mobile,
}: NavigationArrowType) => (
	<GradientContainer
		className={className}
		right={right}
		left={left}
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
