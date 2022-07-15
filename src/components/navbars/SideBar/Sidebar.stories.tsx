import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBarType } from './types';
import Sidebar from '.';
import mapToViews from '../../../examples/sidebar/views.map';

export default {
	title: 'components/navbars',
	component: Sidebar,
	argTypes: {},
} as Meta<typeof Sidebar>;

const template: Story<SideBarType> = (args) => (
	<div
		style={{
			position: 'absolute',
			left: '0px',
			top: '0px',
			width: '100%',
			height: '1000px',
			backgroundImage:
				'url(https://s3-alpha-sig.figma.com/img/dfd4/6559/b7adc37c19c6404ef9f5df5eb1bb9ff4?Expires=1658102400&Signature=DzVUEPt9CDI4NUwqYvHhjq2U-PVeQyZkWm-ZizS2p46OZCvV4ebddN7TQi3DmrA6jkOM1x-CUGulZb~C0l-IN-3GoXXHVydus0VUE2zlU2SFrL1x2G9bS-uLGdVnyPSXwfK~TMsGbZBBBU6NFiH8fluYGwI2TdAwjVW55q~swzWwo0Em6VXF5Byr9DNyrozzlMggBLw-PIDbDyCLP0NnOn5iiJ0GdaGDptwwFuIF-k90a5Fgfayz9BR6P~8mpAAqVEdntZERtjTwd0L1juBLe8xxDYd3ul2wXNn2qL-~1ER-qV8v0zwv3YSnc315El3AcHcNjq-L7tYb9tQwMAyYYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
		}}
	>
		<Sidebar {...args} />
	</div>
);

export const sidebar: Story<SideBarType> = template.bind({});

sidebar.args = {
	activeSidebar: false,
	mapToViews: mapToViews,
};
