import React from 'react';
import SFProTextGlobalStyle from './fontGlobalStyles/SFProText'

export const decorators = [
  (Story) => (
    <>
			<SFProTextGlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
