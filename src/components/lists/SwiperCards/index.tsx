import React, { useEffect, useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import { Swiper } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel } from 'swiper';
import { NavigationOptions, Swiper as SwiperType } from 'swiper/types';

import CategoriesListGlobalStyle, {
	StyledSwiperSlide,
	NavigationArrowLeft,
	NavigationArrowRight,
} from './styled';

import useMediaQuery from '../../../hooks/useMediaQuery';
import { deviceSize, size } from '../../../constants/devicesSizes';
import CategoriesListSkeleton from './components/Skeleton';
import SwiperItem from './components/SwiperItem';
import { SwiperCardsType } from './types';
export const ITEM_TARGET_SIZE = 350;

const SwiperCards = ({
	list,
	loading,
	error,
	selected,
	onSelectedChange,
}: SwiperCardsType) => {
	const isMobile = useMediaQuery(deviceSize.mobileL);
	const [selectedItemId, setSelectedItemId] = React.useState(selected);
	const prevRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const [swiperSize, setSwiperSize] = React.useState(0);
	const exactSlidesPerView = swiperSize / ITEM_TARGET_SIZE;
	const slidesPerView = Math.round(exactSlidesPerView);

	React.useEffect(() => {
		onSelectedChange(selectedItemId);
	}, [selectedItemId]);

	const handleSwiperInit = (swiper: SwiperType) => {
		(swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
		(swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
		swiper.navigation.init();
		swiper.navigation.update();
		setSwiperSize(swiper.width);
	};

	const calculateMargin = () => {
		const margin = swiperSize / exactSlidesPerView;
		console.log(margin);
	};

	calculateMargin();

	if (loading) {
		return <CategoriesListSkeleton />;
	}

	if (error) {
		return <span>Items no disponibles</span>;
	}

	return (
		<>
			<CategoriesListGlobalStyle />

			<Swiper
				slidesPerView={'auto'}
				slidesPerGroup={slidesPerView}
				spaceBetween={1}
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
						mobile={isMobile}
						position={ITEM_TARGET_SIZE}
						margin={calculateMargin}
					/>
				</div>
				<div ref={nextRef} className="navigation-buttons">
					<NavigationArrowRight
						right
						mobile={isMobile}
						position={ITEM_TARGET_SIZE * (slidesPerView - 1)}
						margin={calculateMargin}
					/>
				</div>
			</Swiper>
		</>
	);
};

export default SwiperCards;
