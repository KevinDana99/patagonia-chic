import React,{ FC, useEffect, useState } from 'react'
import { Container, SelectStyled, SpanTitleStyled, IconStyled } from './styled'
import { SelectArray, SelectProps, Hover } from './types'
import { orderStock } from './utils'

const Checkbox: FC<SelectProps> = ({
    value,
    title,
    titleOptions,
    onChange
}) => {
    const [state, setState] = useState<SelectArray>(value)
    const [hoverState, setHoverState] = useState<Hover>({
        hover: false
    })

useEffect(()=>{
    setState(orderStock(value))
}, [value])

    return (
        <Container>

            <SelectStyled 
                onChange={onChange} 
                onMouseOver={()=> setHoverState({...hoverState, hover: true}) } 
                onMouseOut={()=> setHoverState({...hoverState, hover: false}) }
            >

                <option hidden={true} >
                    {titleOptions}
                </option>

                {
                    state.map((opt, index) =>{
                        return (
                            <option 
                                key={index} 
                                value={opt.name} 
                                disabled={!opt.stock}
                            >
                                {`${opt.name} ${opt.stock && `- Agotado`}`}
                            </option>
                            )
                        })
                }
                
            </SelectStyled>

            <IconStyled aria-hidden="true" hover={hoverState.hover} >
                &nbsp;
            </IconStyled>

            <SpanTitleStyled>{title}</SpanTitleStyled>
        </Container>
    )
}

export default Checkbox;