import React from "react";
export interface TextareaProps {
    text: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    name?: string;
    value?: string | number;
}