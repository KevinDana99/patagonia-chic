import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoriesListType } from './types';
import SwiperCards from '.';
import exampleList from '../../../examples/categoriesList/list.json';

export default {
	title: 'Components/lists',
	component: SwiperCards,
} as Meta<typeof SwiperCards>;

const Template: Story<CategoriesListType> = (args) => <SwiperCards {...args} />;

export const swiperCards: Story<CategoriesListType> = Template.bind({});

swiperCards.args = {
	list: exampleList as CategoriesListType['list'],
};
