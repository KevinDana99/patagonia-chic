import styled from 'styled-components';
import { PrimaryCalendarStyleType } from './types';

export const Container = styled.div<PrimaryCalendarStyleType>`
	${(props) =>
		props.range
			? `


.react-calendar__tile:enabled:hover {
    border: 2px solid #1079e3;
    border-left: none;
    border-radius: 0px 28px 28px 0px;

}


`
			: `
.react-calendar__tile:enabled:hover {
    border: 2px solid #1079e3;
    border-radius: 28px;
}

`}
`;
