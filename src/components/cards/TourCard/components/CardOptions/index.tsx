import React from 'react';
import { CardOptionsType } from './types';
import {
	OptionContainer,
	Option,
	BoxOption,
	NumberReserveWeek,
} from './styled';

import CustomIcon from '../../../../graphics/CustomIcon';
import Text from '../../../../texts/Text';

const CardOptions = ({ bookingsThisWeekCount, texts }: CardOptionsType) => (
	<OptionContainer>
		{bookingsThisWeekCount && texts.bookingsThisWeekText && (
			<BoxOption>
				<CustomIcon name="group-circle" />
				<Option>
					<NumberReserveWeek>
						<Text weight={'bold'}>{bookingsThisWeekCount.toString()}</Text>
					</NumberReserveWeek>
					<Text>{texts.bookingsThisWeekText}</Text>
				</Option>
			</BoxOption>
		)}

		{texts.lastBookingTimeText && (
			<BoxOption>
				<CustomIcon name="ray-circle" />
				<Option>
					<Text size={12}>{texts.lastBookingTimeText}</Text>
				</Option>
			</BoxOption>
		)}
	</OptionContainer>
);

export default CardOptions;
