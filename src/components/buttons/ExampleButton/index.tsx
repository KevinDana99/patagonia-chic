import React,{FC} from 'react'
import { StyledButton } from './styled'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({size, primary, disabled, text, onClick, ...props}) => {
    return (
        <StyledButton type="button" onClick={onClick} primary={primary} disabled={disabled} size={size} {...props}>
            {text}
        </StyledButton>
    )
}

export default Button;