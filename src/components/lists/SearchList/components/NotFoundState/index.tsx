import React from 'react';
import { Container, StyledText } from './styled';
import { NotFoundStatePropsType } from './types';

const NotFoundState = ({
	message = 'No se encontraron resultados para "<b>{{queryText}}</b>"',
	values,
}: NotFoundStatePropsType) => {
	const formatMessage = (message: string) => {
		if (!values) return message;
		return Object.keys(values).reduce((acc, curr) => {
			const regex = new RegExp(/{{/.source + curr + /}}/.source);
			return acc.replace(regex, values[curr]);
		}, message);
	};

	return (
		<Container>
			<StyledText
				dangerouslySetInnerHTML={{ __html: formatMessage(message) }}
			/>
		</Container>
	);
};

export default NotFoundState;
