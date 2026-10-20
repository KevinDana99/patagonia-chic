import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SwiperType } from './types';
import SwiperComponent from '.';
import TourCard from '../../cards/TourCard';

const exampleList = [
	{
		alt: 'image1',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image2',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image3',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image4',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
	{
		alt: 'image5',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
	},
];

export default {
	title: 'Components/swipers',
	component: SwiperComponent,
	argTypes: {},
} as Meta<typeof SwiperComponent>;

const Template: Story<SwiperType> = (args) => (
	<div style={{ height: '500px', width: '500px' }}>
		<SwiperComponent {...args} />
		<TourCard
			coverImage={<SwiperComponent mode="default" imageList={exampleList} />}
			subTitle={'El Calafate'}
			title={'Perito Moreno: Pasarelas'}
			price={'20.600'}
			currencySymbol={'$'}
			currencyCode={'ARS'}
			subPrice={'27.800'}
			isAddedToCart={false}
			isAvailable={false}
			bookingsThisWeekCount={800}
			texts={{
				buttonDefaultText: 'Reservar',
				buttonAddedToCartText: 'Ver carrito',
				buttonAvaiableText: 'Ver detalle',
				detailsAddedText: 'Agregaste esta excursion a tu carrito',
				bookingsThisWeekText: 'veces reservado la ultima semana',
				lastBookingTimeText: 'Reservado hace 30 horas atras',
			}}
		/>
	</div>
);

export const Swiper = Template.bind({});
Swiper.args = {
	mode: 'default',
	imageList: exampleList,
};
