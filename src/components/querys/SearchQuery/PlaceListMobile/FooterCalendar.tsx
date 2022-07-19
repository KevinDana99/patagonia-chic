import React from 'react';
import { ContainerFooter, DataFooter, ItemFooter } from './styled';

const FooterCalendar = ({ startDate, endDate, place }) => {
	return (
		<ContainerFooter>
			<ItemFooter>
				<div>Lugar</div>
				<DataFooter>{place ? place.name : '-'}</DataFooter>
			</ItemFooter>
			<ItemFooter>
				<div>Llegada</div>
				<DataFooter>{endDate ? startDate.name : '-'}</DataFooter>
			</ItemFooter>
			<ItemFooter>
				<div>Partida</div>
				<DataFooter>{endDate ? endDate.name : '-'}</DataFooter>
			</ItemFooter>
		</ContainerFooter>
	);
};

export default FooterCalendar;
