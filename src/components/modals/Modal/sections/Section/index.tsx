import React from 'react';
import dataPrimary from './../PrimarySection/db';
import dataSecondary from './../SecondarySection/db';
import PrimarySection from './../PrimarySection';
import SecondarySection from '../SecondarySection';

const Section = () => {
	return (
		<>
			{dataPrimary.map(({ title, subtitle }, index) => {
				return <PrimarySection key={index} title={title} subtitle={subtitle} />;
			})}

			{dataSecondary.map(({ Icon, description }, index) => {
				return (
					<SecondarySection
						key={index}
						icon={<Icon />}
						description={description}
					/>
				);
			})}
		</>
	);
};

export default Section;
