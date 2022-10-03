import React, { useState } from 'react';
import { FullscreenSwiperType } from './types';
import { Lazy, Pagination, Navigation, EffectFade } from 'swiper';
import {
    CloseIcon,
	CloseIconContainer,
	Container,
	CounterStatusText,
	Header,
	Image,
	ImageCounterStatus,
	ImageDescription,
	Slide,
	SwiperContainer,
	SwiperContent,
} from './styled';
import { PaginationOptions } from 'swiper/types';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { deviceSize } from '../../../constants/devicesSizes';

const FullscreenSwiper = ({
	imageList,
	show,
	onClose,
}: FullscreenSwiperType) => {
	const [imageIndex, setImageIndex] = useState(0);

	const isMobile = useMediaQuery(deviceSize.mobileL);
	const isTablet = useMediaQuery(deviceSize.tablet);

	const paginationOptions: PaginationOptions = {
		dynamicMainBullets: 4,
		dynamicBullets: true,
	};

	return show ? (
		<Container>
			<SwiperContent>
				<Header>
					<ImageCounterStatus>
						<CounterStatusText>{`${imageIndex + 1} / ${
							imageList.length
						}`}</CounterStatusText>
					</ImageCounterStatus>
					<CloseIconContainer onClick={() => onClose()}>
						<CloseIcon name="close-icon" size={20} color={'#3B3B3B'} />
					</CloseIconContainer>
				</Header>
				<SwiperContainer
					spaceBetween={0}
					slidesPerView={1}
					onSlideChange={(index) => setImageIndex(index.realIndex)}
					modules={[Lazy, Pagination, Navigation, EffectFade]}
					lazy={{
						loadPrevNext: true,
					}}
					pagination={paginationOptions}
					navigation={isTablet || isMobile ? false : true}
					effect={'fade'}
					fadeEffect={{
						crossFade: true,
					}}
				>
					{imageList.map((image, key) => (
						<Slide key={key}>
							<Image
								data-src={image.uri}
								className="swiper-lazy"
								alt={image.alt}
							/>
							<div className="swiper-lazy-preloader swiper-lazy-preloader-blue"></div>
						</Slide>
					))}
				</SwiperContainer>
				<ImageDescription>
					{imageList[`${imageIndex}`].description}
				</ImageDescription>
			</SwiperContent>
		</Container>
	) : null;
};

export default FullscreenSwiper;
