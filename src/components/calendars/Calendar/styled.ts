import styled from 'styled-components';
import { PrimaryCalendarStyleType } from './types';

export const Container = styled.div<PrimaryCalendarStyleType>`
	.react-calendar__navigation__prev-button {
		visibility: ${(props) => props.disabledBackArrow && 'hidden'};
	}

	${(props) =>
		!props.disableRange
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
   
}

`}
`;
