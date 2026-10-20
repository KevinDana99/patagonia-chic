import React from 'react';
import Text from '../../texts/Text';
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
		<CounterTitle>
			<Text size={13} weight={'regular'}>
				{texts.selectQuantity}
			</Text>
		</CounterTitle>
		<CounterButtons>
			<CounterButton
				onClick={(e) => {
					e.stopPropagation();
					value !== null && onChange(value > 0 ? value - 1 : 0);
				}}
				disabled={value === 0}
			>
				<Text>-</Text>
			</CounterButton>
			<CounterText>
				<Text>{value?.toString()}</Text>
			</CounterText>
			<CounterButton
				onClick={(e) => {
					e.stopPropagation();
					value !== null && onChange(value + 1);
				}}
			>
				<Text>+</Text>
			</CounterButton>
		</CounterButtons>
	</CounterSelectContainer>
);

export default CounterSelect;
