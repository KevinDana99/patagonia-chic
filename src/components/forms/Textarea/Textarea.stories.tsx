import React from 'react';
import { Story, Meta } from '@storybook/react';

import Textarea from '.';
import { TextareaProps } from "./types";

export default {
  title: 'Components/forms/Textarea',
  component: Textarea,
  argTypes: {
    onsubmit: { action: 'onsubmit' },
  },
} as Meta<typeof Textarea>;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const TextareaAddMessage: Story<TextareaProps> = Template.bind({});

TextareaAddMessage.args = {
  text: 'Agregar mensaje',
};