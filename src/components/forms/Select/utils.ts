import { SelectArray } from "./types";


export function orderStock(value: SelectArray){
    let inStock = [];
    let withoutStock = [];
    for (let index = 0; index < value.length; index++) {
        if(value[index].stock === true){
            inStock.push(value[index])
        } else {
            withoutStock.push(value[index])
        }
    }
    return withoutStock.concat(inStock)
}