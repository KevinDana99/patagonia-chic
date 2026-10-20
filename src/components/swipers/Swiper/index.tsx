/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';
import { SwiperType } from './types';
import { Lazy, Pagination, Navigation } from 'swiper';
import {
	Container,
	Image,
	PaginationLeftButton,
	PaginationRightButton,
	SliderPaginationContainer,
	SwiperContainer,
} from './styled';
import { PaginationOptions } from 'swiper/types';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { deviceSize } from '../../../constants/devicesSizes';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiper = ({ imageList }: SwiperType) => {
	const [swiperCurrentIndex, setSwiperCurrentIndex] = useState(0);
	const isMobile = useMediaQuery(deviceSize.mobile);
	const isTablet = useMediaQuery(deviceSize.tablet);

	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	const paginationOptions: PaginationOptions = {
		dynamicMainBullets: 3,
		dynamicBullets: true,
	};

	return (
		<Container>
			<SwiperContainer
				spaceBetween={0}
				slidesPerView={1}
				onActiveIndexChange={(activeSlide) =>
					setSwiperCurrentIndex(activeSlide.activeIndex)
				}
				modules={[Lazy, Pagination, Navigation]}
				lazy={{
					loadPrevNext: true,
				}}
				pagination={paginationOptions}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onSwiper={(swiper) => {
					setTimeout(() => {
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						// eslint-disable-next-line no-param-reassign
						swiper.params.navigation.prevEl = navigationPrevRef.current;

						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						// eslint-disable-next-line no-param-reassign
						swiper.params.navigation.nextEl = navigationNextRef.current;

						// Re-init navigation
						swiper.navigation.destroy();
						swiper.navigation.init();
						swiper.navigation.update();
					});
				}}
			>
				{imageList.map((image, key) => (
					<SwiperSlide key={key}>
						<Image
							src={image.uri}
							className="swiper-lazy"
							alt={image.alt}
							onError={(e) =>
								((e.target as HTMLImageElement).style.display = 'none')
							}
						/>
						<div className="swiper-lazy-preloader swiper-lazy-preloader-blue"></div>
					</SwiperSlide>
				))}
			</SwiperContainer>
			{!isTablet && !isMobile && (
				<SliderPaginationContainer>
					<PaginationLeftButton
						ref={navigationPrevRef}
						show={swiperCurrentIndex != 0}
					>
						<MdArrowBackIosNew />
					</PaginationLeftButton>
					<PaginationRightButton
						ref={navigationNextRef}
						show={swiperCurrentIndex != imageList.length - 1}
					>
						<MdArrowForwardIos />
					</PaginationRightButton>
				</SliderPaginationContainer>
			)}
		</Container>
	);
};

export default Swiper;
