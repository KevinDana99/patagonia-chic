import React from 'react';

export type JumboBoxType = {
	texts?: { title?: string; buttonTitle?: string };
	renderButton?: JSX.Element;
	background?: string;
};
