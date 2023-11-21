import {IRes} from "../types";
import {ICar, IPagination} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll:():IRes<IPagination>=>apiService.get(urls.cars),
    create:(data:ICar):IRes<ICar>=>apiService.post(urls.cars, data)
}
export {
    carService
}