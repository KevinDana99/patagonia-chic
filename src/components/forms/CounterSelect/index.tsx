import React from 'react';
import {
	CounterButton,
	CounterButtons,
	CounterSelectContainer,
	CounterText,
	CounterTitle,
} from './styled';
import { CounterSelectType } from './types';

const CounterSelect = ({ onChange, texts, value }: CounterSelectType) => (
	<CounterSelectContainer>
		<CounterTitle>{texts.selectQuantity}</CounterTitle>
		<CounterButtons>
			<CounterButton
				onClick={(e) => {
					e.stopPropagation();
					value !== null && onChange(value > 0 ? value - 1 : 0);
				}}
				disabled={value === 0}
			>
				-
			</CounterButton>
			<CounterText>{value}</CounterText>
			<CounterButton
				onClick={(e) => {
					e.stopPropagation();
					value !== null && onChange(value + 1);
				}}
			>
				+
			</CounterButton>
		</CounterButtons>
	</CounterSelectContainer>
);

export default CounterSelect;
