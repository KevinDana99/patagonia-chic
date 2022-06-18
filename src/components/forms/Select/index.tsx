import React,{ FC, useEffect, useState } from 'react'
import { Container, SelectStyled, SpanTitleStyled, IconStyled } from './styled'
import { SelectArray, SelectProps, Hover } from './types'
import { orderStock } from './utils'

const Checkbox: FC<SelectProps> = ({
    value,
    title,
    defaultValue,
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
            <SelectStyled onChange={onChange}  onMouseOver={()=> setHoverState({...hoverState, hover: true}) } onMouseOut={()=> setHoverState({...hoverState, hover: false}) }>
                <option hidden={true} >Seleccione talle</option>
                {
                    state.map((opt, index) =>{
                        return (
                            <option key={index} value={opt.value} disabled={!opt.stock}>{`${opt.value} ${opt.stock && `- Agotado`}`}</option>
                            )
                        })
                }
            </SelectStyled>
            <IconStyled aria-hidden="true" hover={hoverState.hover} >&nbsp;</IconStyled>
            <SpanTitleStyled>{title}</SpanTitleStyled>
        </Container>
    )
}

export default Checkbox;