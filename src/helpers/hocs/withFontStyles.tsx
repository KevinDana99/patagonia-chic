import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
		font-family: SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", "Lucida Grande", sans-serif;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyleProxy: any = GlobalStyle;

// Wait until the new Styled component types to fix that

export function withFontStyles<P>(WrappedComponent: React.ComponentType<P>) {
	const ComponentWithFonts = (props: P) => {
		return (
			<>
				<GlobalStyleProxy />
				<WrappedComponent {...props} />
			</>
		);
	};

	return ComponentWithFonts;
}
