import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoriesListType } from './types';
import CategoriesLisComponent from '.';
import exampleList from '../../../examples/categoriesList/list.json';

export default {
	title: 'Components/lists',
	component: CategoriesLisComponent,
} as Meta<typeof CategoriesLisComponent>;

const Template: Story<CategoriesListType> = (args) => (
	<CategoriesLisComponent {...args} />
);

export const CategoriesList: Story<CategoriesListType> = Template.bind({});

CategoriesList.args = {
	list: exampleList as CategoriesListType['list'],
};
