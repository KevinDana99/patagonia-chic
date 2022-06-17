import React,{ FC } from 'react'
import { DataInputContainer, DataInput, StyledLabel } from './styled'
import { InputProps } from './types'

const Input: FC<InputProps> = ({
    text
}) => {


    return (

            <DataInputContainer id="container_botas-3_1__1">
                <DataInput type="text" id="data-3_2" placeholder=" " />
                <StyledLabel htmlFor="data-3_2"  >{text}</StyledLabel>
            </DataInputContainer>

    )
}

export default Input;