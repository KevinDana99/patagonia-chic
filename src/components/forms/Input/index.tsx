import React,{ FC } from 'react'
import { DataInputContainer, DataInput, StyledLabel } from './styled'
import { InputProps } from './types'

const Input: FC<InputProps> = ({
    text,
    onChange,
    name,
    value
}) => {


    return (
        <DataInputContainer id="container_botas-3_1__1">
            <DataInput 
                type="text" 
                id="data-3_2" 
                placeholder=" " 
                onChange={onChange} 
                name={name} 
                value={value} 
            />
            <StyledLabel htmlFor="data-3_2" >
                {text}
            </StyledLabel>
        </DataInputContainer>
    )
}

export default Input;