import { SelectArray } from "./types";


export function orderStock(value: SelectArray){
    const inStock = value.filter(product => product.stock === true)
    const withoutStock = value.filter(product => product.stock === false)
    return withoutStock.concat(inStock)
}