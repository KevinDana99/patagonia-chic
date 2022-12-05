/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import styled, { createGlobalStyle } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { deviceSize } from '../../../constants/devicesSizes';
import { StyledSwiperSlideType } from './types';
import NavigationArrow from './components/NavigationArrow';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoriesListGlobalStyle: any = createGlobalStyle`
html{
  --container: 1000;
}
.swiper-button-disabled {
  display: none;
}

@media ${deviceSize.mobile} {
  .navigation-buttons {
    pointer-events: none;

  }


}
`;

export const StyledSwiperSlide = styled(SwiperSlide)<StyledSwiperSlideType>`
	height: 320px;
	${({ width }) => (width ? `width: ${width}px` : '')};
`;

export const NavigationArrowRight = styled(NavigationArrow).attrs({
	right: true,
})`
	left: ${({ right, position, offSet }) =>
		right && position && offSet && position - offSet + 'px'};
`;

export const NavigationArrowLeft = styled(NavigationArrow).attrs({
	left: true,
})`
	${({ left, position, lastPosition, offSet }) =>
		!lastPosition &&
		left &&
		position &&
		offSet &&
		`left: ${position - offSet}px`}

	${({ left, position, lastPosition, offSet }) =>
		lastPosition &&
		left &&
		position &&
		offSet &&
		`right: ${position - offSet}px`}
`;

export default CategoriesListGlobalStyle;
