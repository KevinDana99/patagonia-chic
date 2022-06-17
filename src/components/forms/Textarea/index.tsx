import React,{ FC } from 'react'
import { DataInputContainer } from '../Input/styled'
import { StyledTextarea, StyledLabel, DataElm } from './styled'
import { TextareaProps } from './types'

const Input: FC<TextareaProps> = ({
    text
}) => {


    return (

            <DataElm >
                <DataInputContainer id="container_botas-3_1__1">
                    <StyledTextarea id="data-3_2" placeholder=" "></StyledTextarea>
                    <StyledLabel /* for="data-3_2" */ >{text}</StyledLabel>
                </DataInputContainer>
            </DataElm>

    )
}
/*         <StyledInput type="text" onClick={onClick} primary={primary} size={size} {...props}>
            {text}
        </StyledInput> */

export default Input;