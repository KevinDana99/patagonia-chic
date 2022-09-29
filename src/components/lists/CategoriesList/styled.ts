import styled, { createGlobalStyle } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { deviceSize } from '../../../constants/devicesSizes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoriesListGlobalStyle: any = createGlobalStyle`
.swiper-button-disabled {
  display: none;
}

@media ${deviceSize.mobileL} {
  .navigation-buttons {
    pointer-events: none;
  }
}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	padding-top: 1px;
	width: 100px;
`;

export default CategoriesListGlobalStyle;
