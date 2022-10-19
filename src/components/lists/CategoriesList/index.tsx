import React from 'react';

// Import Swiper styles
import 'swiper/swiper.min.css';

import { Swiper } from 'swiper/react';
import { Navigation, FreeMode, Mousewheel } from 'swiper';
import { NavigationOptions, Swiper as SwiperType } from 'swiper/types';

import { CategoriesListType } from './types';
import CategoriesListGlobalStyle, { StyledSwiperSlide } from './styled';
import CategoryItem from './components/CategoryItem';
import NavigationArrow from './components/NavigationArrow';

import useMediaQuery from '../../../hooks/useMediaQuery';
import { deviceSize } from '../../../constants/devicesSizes';
import CategoriesListSkeleton from './components/Skeleton';

export const ITEM_TARGET_SIZE = 90;

const CategoriesList = ({
	list,
	loading,
	error,
	selected,
	onSelectedChange,
}: CategoriesListType) => {
	const isMobile = useMediaQuery(deviceSize.mobileL);
	const [selectedItemId, setSelectedItemId] = React.useState(selected);
	const prevRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const [swiperSize, setSwiperSize] = React.useState(0);

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

	const slidesPerView = Math.round(swiperSize / ITEM_TARGET_SIZE);

	if (loading) {
		return <CategoriesListSkeleton />;
	}

	if (error) {
		return <span>Categorías no disponibles</span>; // Revisar error handler
	}

	return (
		<>
			<CategoriesListGlobalStyle />
			<Swiper
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
						<CategoryItem
							{...item}
							selected={item.id === selectedItemId}
							onClick={() => setSelectedItemId(item.id)}
						/>
					</StyledSwiperSlide>
				))}
				<div ref={prevRef} className="navigation-buttons">
					<NavigationArrow left mobile={isMobile} />
				</div>
				<div ref={nextRef} className="navigation-buttons">
					<NavigationArrow right mobile={isMobile} />
				</div>
			</Swiper>
		</>
	);
};

export default CategoriesList;
