import React from 'react';
import dataPrimary from './../PrimarySection/db';
import dataSecondary from './../SecondarySection/db';
import PrimarySection from './../PrimarySection';
import SecondarySection from '../SecondarySection';

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

			{dataSecondary.map(({ Icon, description, track }, index) => {
				return (
					<SecondarySection
						key={index}
						Icon={Icon}
						description={description}
						track={track}
					/>
				);
			})}
		</>
	);
};

export default Section;
