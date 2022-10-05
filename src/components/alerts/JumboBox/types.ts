import React from 'react';

export type JumboBoxType = {
	texts?: { title?: string; buttonTitle?: string };
	renderButton?: React.FC;
	background?: string;
};
