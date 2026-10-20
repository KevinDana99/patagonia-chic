import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FullscreenSwiperType } from './types';
import FullscreenSwiperComponent from '.';

const exampleList = [
	{
		alt: 'image1',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
		description: 'Visita a las Pasarelas',
	},
	{
		alt: 'image2',
		uri: 'https://swiperjs.com/demos/images/nature-1.jpg',
		description: 'Visita a las Pasarelas 2',
	},
	{
		alt: 'image3',
		uri: 'https://swiperjs.com/demos/images/nature-2.jpg',
		description: 'Visita a las Pasarelas 3',
	},
	{
		alt: 'image4',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
		description: 'Visita a las Pasarelas 4',
	},
	{
		alt: 'image5',
		uri: 'https://i.ibb.co/VMbg2QC/roi-dimor-wpje5h-Mf-Jj0-unsplash-1.png',
		description: 'Visita a las Pasarelas 5',
	},
];

export default {
	title: 'Components/swipers',
	component: FullscreenSwiperComponent,
	argTypes: {
		onClose: { action: 'closed' },
	},
} as Meta<typeof FullscreenSwiperComponent>;

const Template: Story<FullscreenSwiperType> = (args) => (
	<FullscreenSwiperComponent {...args} />
);

export const FullscreenSwiper = Template.bind({});
FullscreenSwiper.args = {
	imageList: exampleList,
	show: true,
};
