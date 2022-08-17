import styled from 'styled-components';
import { PrimaryCalendarStyleType } from './types';

export const Container = styled.div<PrimaryCalendarStyleType>`
	.react-calendar__navigation__prev-button {
		visibility: ${(props) => props.disabledBackArrow && 'hidden'};
	}

	.react-calendar {
		box-shadow: ${(props) =>
			props.shadow ? '0px 2px 3px rgba(0, 0, 0, 0.276)' : 'none'};
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
    .react-calendar__tile--hover {
         background-color : transparent;

    
    }
            
    .react-calendar__tile--rangeStart {

background: #1087ff;

    }
            
.react-calendar__tile:enabled:hover {
    border: 2px solid #1079e3;


   
}




`}

	${(prop) =>
		prop.markCurrentDay &&
		`.react-calendar__tile--now {
		background-color: rgb(230, 230, 230);
		color: black;
		`}
`;
