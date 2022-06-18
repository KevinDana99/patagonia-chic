export interface SelectType {
    value: string;
    stock: boolean
}
export type SelectArray = SelectType[]

export interface SelectProps {
    title: string;
    value: SelectArray;
    defaultValue: string;
    onChange?: () => void;
}
export interface Hover {
    hover?: boolean
};