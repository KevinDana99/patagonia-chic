export interface SelectType {
    name: string;
    stock: boolean
}
export type SelectArray = SelectType[]

export interface SelectProps {
    title: string;
    value: SelectArray;
    titleOptions: string;
    onChange?: () => void;
}
export interface Hover {
    hover?: boolean
};