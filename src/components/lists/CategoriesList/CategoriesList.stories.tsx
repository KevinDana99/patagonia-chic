import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoriesListType } from './types';
import CategoriesList from '.';
import exampleList from '../../../examples/categoriesList/list.json';

export default {
	title: 'Components/lists',
	component: CategoriesList,
} as Meta<typeof CategoriesList>;

const Template: Story<CategoriesListType> = (args) => (
	<CategoriesList {...args} />
);

export const CategoriesListStory: Story<CategoriesListType> = Template.bind({});

CategoriesListStory.args = {
	list: exampleList as CategoriesListType['list'],
};
