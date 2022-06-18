import React,{ FC } from 'react'
import { StyledTextarea, StyledLabel, TextareaContainer } from './styled'
import { TextareaProps } from './types'

const Input: FC<TextareaProps> = ({
    text,
    onChange
}) => {


    return (
        <TextareaContainer>
            <StyledTextarea  id="alergias_vianda-3_1" placeholder=" " onChange={onChange}></StyledTextarea>
            <StyledLabel htmlFor="alergias_vianda-3_1"  >{text}</StyledLabel>
        </TextareaContainer>
    )
}

export default Input;