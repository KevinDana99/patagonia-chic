import {  MouseEventHandler } from "react"
export interface ButtonProps {
    text?: string,
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    onClick?: () => void,
    onLoadEnd?: () => void,
    loading?: boolean,
}