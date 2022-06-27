import React, { FC } from 'react';
import { SectionType } from './types';

const SectionCommon: FC<SectionType> = ({ title, label }) => {
	return (
		<div>
			<h3>{title}</h3>
			{label.map((item, index) => (
				<a href={item.url} key={index}>
					<p>{item.label}</p>
				</a>
			))}
		</div>
	);
};

export default SectionCommon;
