/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Swiper } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel } from 'swiper';
import { NavigationOptions, Swiper as SwiperType } from 'swiper/types';

import CategoriesListGlobalStyle, {
	StyledSwiperSlide,
	NavigationArrowLeft,
	NavigationArrowRight,
} from './styled';

import useMediaQuery from '../../../hooks/useMediaQuery';
import { deviceSize } from '../../../constants/devicesSizes';
import SwiperItem from './components/SwiperItem';
import { SwiperCardsType } from './types';

const SwiperCards = ({
	list,
	error,
	selected,
	ITEM_TARGET_SIZE = 350,
	OFFSET = 36,
	MARGIN = 1,
	onSelectedChange,
}: SwiperCardsType) => {
	const isTablet = useMediaQuery(deviceSize.tablet);
	const isMobile = useMediaQuery(deviceSize.mobile);
	const [selectedItemId, setSelectedItemId] = React.useState(selected);
	const prevRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const [swiperSize, setSwiperSize] = React.useState(0);
	const exactSlidesPerView = swiperSize / ITEM_TARGET_SIZE;
	const slidesPerView = Math.round(exactSlidesPerView);
	const [lastPosition, setLastPosition] = useState(false);

	React.useEffect(() => {
		onSelectedChange(selectedItemId);
	}, [onSelectedChange, selectedItemId]);

	const handleSwiperInit = (swiper: SwiperType) => {
		(swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
		(swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
		swiper.navigation.init();
		swiper.navigation.update();
		setSwiperSize(swiper.width);
	};

	const calculatePositionArrow = () => {
		return ITEM_TARGET_SIZE * (slidesPerView - 1);
	};

	if (error) {
		return <span>Items no disponibles</span>;
	}

	return (
		<>
			<CategoriesListGlobalStyle />

			<Swiper
				allowTouchMove={true}
				onSlideChange={(swiper) => setLastPosition(swiper.isEnd)}
				slidesPerView={'auto'}
				slidesPerGroup={slidesPerView}
				spaceBetween={MARGIN}
				freeMode
				mousewheel
				modules={[FreeMode, Navigation, Mousewheel]}
				onInit={handleSwiperInit}
				onResize={(swiper) => setSwiperSize(swiper.width)}
			>
				{list.map((item, index) => (
					<StyledSwiperSlide key={`key-${index}`} width={ITEM_TARGET_SIZE}>
						<SwiperItem
							{...item}
							selected={item.id === selectedItemId}
							onClick={() => setSelectedItemId(item.id)}
						/>
					</StyledSwiperSlide>
				))}

				<div ref={prevRef} className="navigation-buttons">
					<NavigationArrowLeft
						left
						mobile={isMobile || isTablet}
						lastPosition={lastPosition}
						offSet={OFFSET}
						position={
							lastPosition ? calculatePositionArrow() : ITEM_TARGET_SIZE
						}
					/>
				</div>
				<div ref={nextRef} className="navigation-buttons">
					<NavigationArrowRight
						right
						mobile={isMobile || isTablet}
						offSet={OFFSET}
						position={calculatePositionArrow()}
					/>
				</div>
			</Swiper>
		</>
	);
};

export default SwiperCards;
