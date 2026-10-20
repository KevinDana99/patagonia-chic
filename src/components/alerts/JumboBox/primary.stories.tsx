import React from 'react';
import { Story, Meta } from '@storybook/react';
import JumboBox from '.';
import { JumboBoxType } from './types';
import PrimaryButton from '../../buttons/PrimaryButton';
import { BoxButton, BoxTitle, ContentContainer, TextTitle } from './styled';
export default {
	title: 'Components/alerts',
	component: JumboBox,
	argTypes: {},
} as Meta<typeof JumboBox>;

const Template: Story<JumboBoxType> = (args) => <JumboBox {...args} />;

export const jumboBox: Story<JumboBoxType> = Template.bind({});
jumboBox.args = {
	children: (
		<>
			<ContentContainer>
				<BoxTitle>
					<TextTitle color="#3B3B3B" weight="semi-bold" size={36}>
						Este es el titulo por default
					</TextTitle>
				</BoxTitle>

				<BoxButton>
					<>
						<PrimaryButton
							title={'este es el titulo del boton'}
							theme="color"
						/>
					</>
				</BoxButton>
			</ContentContainer>
		</>
	),
};
