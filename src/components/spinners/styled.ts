import styled from 'styled-components';
import { SpinnerType } from './types';


export const SpinnerStyled = styled.img<SpinnerType>`

height: ${props => props.size + 'px'};

`