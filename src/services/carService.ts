import {IRes} from "../types";
import {ICar, IPagination} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:():IRes<IPagination>=>apiService.get(urls.cars.base),
    create:(data:ICar):IRes<ICar>=>apiService.post(urls.cars.base, data),
    addPhoto:(id:number, photo:FormData):IRes<ICar>=>apiService.put(urls.cars.photo(id),photo)
}
export {
    carService
}