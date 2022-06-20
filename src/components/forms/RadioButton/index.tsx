import React,{ FC, useState } from 'react'
import { StyledInput, ContainerInput, StyledLabel, IconDiv, TextDiv } from './styled'
import { RadioButtonItem, RadioButtonListItemProps } from './types'

const RadioButton: FC<RadioButtonListItemProps> = ({ list, onChange }) => {
    const [state, setState] = useState(list[0].name)
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void{
        setState(e.target.name)
        onChange(e)
    }

    return (
        <>
        {
            list.length &&
            list.map((obj: RadioButtonItem, index) =>{
                return (
                    <ContainerInput key={index} >

                        <StyledInput 
                            id={index.toString().concat("radio")} 
                            name={obj.name} 
                            type="radio" 
                            value={obj.value} 
                            onChange={handleChange} 
                            checked={state === obj.name ? true : false}
                        />

                        <StyledLabel htmlFor={index.toString().concat("radio")}>

                            <IconDiv></IconDiv>

                            <TextDiv>
                                {obj.title ? obj.title : `Opcion ${index + 1}`}
                            </TextDiv>

                        </StyledLabel>

                    </ContainerInput>
                    )
                })
            }
        </>
    )
}

export default RadioButton;