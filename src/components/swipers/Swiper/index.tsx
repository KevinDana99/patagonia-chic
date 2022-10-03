import React from 'react';
import { SwiperType } from './types';
import { Lazy, Pagination, Navigation } from 'swiper';
import {
	Container,
	Image,
	PaginationLeftButton,
	PaginationRightButton,
	Slide,
	SwiperContainer,
} from './styled';
import { PaginationOptions } from 'swiper/types';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Swiper = ({ imageList }: SwiperType) => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	const paginationOptions: PaginationOptions = {
		dynamicMainBullets: 5,
		dynamicBullets: true,
	};

	return (
		<Container>
			<SwiperContainer
				spaceBetween={0}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
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
					<Slide key={key}>
						<Image
							data-src={image.uri}
							className="swiper-lazy"
							alt={image.alt}
							onError={(e) =>
								((e.target as HTMLImageElement).style.display = 'none')
							}
						/>
						<div className="swiper-lazy-preloader swiper-lazy-preloader-blue"></div>
					</Slide>
				))}
			</SwiperContainer>
			<PaginationLeftButton ref={navigationPrevRef}>
				<MdArrowBackIosNew />
			</PaginationLeftButton>
			<PaginationRightButton ref={navigationNextRef}>
				<MdArrowForwardIos />
			</PaginationRightButton>
		</Container>
	);
};

export default Swiper;
