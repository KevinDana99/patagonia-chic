import React from 'react';
import dataPrimary from './../PrimarySection/db';
import dataSecondary from './../SecondarySection/db';
import dataTertiary from './../TertiarySection/db';
import PrimarySection from './../PrimarySection';
import SecondarySection from '../SecondarySection';
import TertiarySection from '../TertiarySection';

const Section = () => {
	return (
		<>
			{dataPrimary.map(({ title, subtitle, path }, index) => {
				return (
					<PrimarySection
						key={index}
						title={title}
						subtitle={subtitle}
						path={path}
					/>
				);
			})}

			{dataTertiary.map(({ iconSelector, description }, index) => {
				return (
					<TertiarySection
						key={index}
						iconSelector={{
							Icon: iconSelector.Icon,
							color: iconSelector.color
								? iconSelector.color
								: (iconSelector.color = 'grey'),
						}}
						description={description}
					/>
				);
			})}

			{dataSecondary.map(({ title, description, track }, index) => {
				return (
					<SecondarySection
						key={index}
						title={title}
						description={description}
						track={track}
					/>
				);
			})}
		</>
	);
};

export default Section;
