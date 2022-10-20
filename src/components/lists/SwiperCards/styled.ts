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

@media ${deviceSize.mobileL} {
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
	left: ${({ right, position }) => right && position && position + 'px'};
`;

export const NavigationArrowLeft = styled(NavigationArrow).attrs({
	left: true,
})`
	${({ left, position, lastPosition }) =>
		!lastPosition && left && position && `left: ${position - 25}px`}

	${({ left, position, lastPosition }) =>
		lastPosition && left && position && `right: ${position + 10}px`}
`;

export default CategoriesListGlobalStyle;
