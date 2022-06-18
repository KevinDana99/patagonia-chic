import React from 'react';
import { Story, Meta } from '@storybook/react';

import Select from '.';
import { SelectProps } from "./types";

export default {
  title: 'Components/forms/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta<typeof Select>;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const SelectSell = Template.bind({});

SelectSell.args = {
    title: "Botas nro 1",
    value: [
        {
            value: "Talle 41.5 EU / 8.5 US",
            stock: true
        },
        {
            value: "Talle 39 EU / 7 US",
            stock: true
        },
        {
            value: "Talle 40 EU / 7 US",
            stock: false
        }
    ],
    titleOptions: "Seleccione talle",
};