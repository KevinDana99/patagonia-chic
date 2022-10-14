import styled, { createGlobalStyle } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { deviceSize } from '../../../constants/devicesSizes';
import { StyledSwiperSlideType } from './types';

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
	padding: 5px;
	${({ width }) => (width ? `width: ${width}px` : '')};
`;

export const ContainerArrow = styled.div``;

export default CategoriesListGlobalStyle;
