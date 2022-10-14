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
	ContainerArrow,
} from './styled';
import NavigationArrow from './components/NavigationArrow';

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
	const slidesPerView = Math.round(swiperSize / ITEM_TARGET_SIZE);

	const [arrowPosition, setArrowPosition] = useState({
		left: 0,
		right: 0,
	});

	useEffect(() => {
		setArrowPosition({ ...arrowPosition, right: slidesPerView - 1 });
	}, [swiperSize, ITEM_TARGET_SIZE, slidesPerView]);

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

	if (loading) {
		return <CategoriesListSkeleton />;
	}

	if (error) {
		return <span>Items no disponibles</span>;
	}

	const nextSlide = () => {
		setArrowPosition({
			...arrowPosition,
			left: arrowPosition.left + 1,
			right: arrowPosition.right + 1,
		});
	};

	const backSlide = () => {
		setArrowPosition({
			...arrowPosition,
			left: arrowPosition.left - 1,
			right: arrowPosition.right - 1,
		});
	};

	return (
		<>
			<CategoriesListGlobalStyle />

			<Swiper
				onSlideNextTransitionStart={nextSlide}
				onSlidePrevTransitionStart={backSlide}
				slidesPerView={'auto'}
				slidesPerGroup={slidesPerView}
				spaceBetween={10}
				freeMode
				mousewheel
				modules={[FreeMode, Navigation, Mousewheel]}
				onInit={handleSwiperInit}
				onResize={(swiper) => setSwiperSize(swiper.width)}
			>
				{list.map((item, index) => (
					<StyledSwiperSlide key={`key-${index}`} width={ITEM_TARGET_SIZE}>
						{index == arrowPosition.left && (
							<ContainerArrow ref={prevRef} className="navigation-buttons">
								<NavigationArrow left mobile={isMobile} position={-50} />
							</ContainerArrow>
						)}
						<SwiperItem
							{...item}
							selected={item.id === selectedItemId}
							onClick={() => setSelectedItemId(item.id)}
						/>
						{index == arrowPosition.right && (
							<ContainerArrow ref={nextRef} className="navigation-buttons">
								<NavigationArrow right mobile={isMobile} position={-40} />
							</ContainerArrow>
						)}
					</StyledSwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SwiperCards;
