import {ICar} from "./carInterface";

export interface IPagination {
    total_items:number,
    total_pages:number,
    prev:string,
    next:string,
    items:ICar[]
}