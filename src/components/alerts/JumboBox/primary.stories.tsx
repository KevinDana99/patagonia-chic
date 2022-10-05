import React from 'react';
import { Story, Meta } from '@storybook/react';
import JumboBox from '.';
import { JumboBoxType } from './types';
import PrimaryButton from '../../buttons/PrimaryButton';
export default {
	title: 'Components/alerts',
	component: JumboBox,
	argTypes: {},
} as Meta<typeof JumboBox>;

const Template: Story<JumboBoxType> = (args) => <JumboBox {...args} />;

export const jumboBox: Story<JumboBoxType> = Template.bind({});
jumboBox.args = {
	texts: {
		title: '¿Muchas excursiones? Te ayudamos a elegir',
		buttonTitle: 'Organizar mi viaje',
	},
	//renderButton: <PrimaryButton title="titulo del boton" theme="color" />,
};
