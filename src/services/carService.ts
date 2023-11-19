import {IRes} from "../types";
import {ICar} from "../interfaces";
import {apiService} from "./api-service";
import {urls} from "../constants";

const carService = {
    getAll:():IRes<ICar[]>=>apiService.get(urls.cars.base),
    create:(data:ICar):IRes<ICar>=>apiService.post(urls.cars.base, data),
    updateById:(id:number, data:ICar):IRes<ICar>=>apiService.put(urls.cars.byId(id), data),
    deleteById:(id:number):IRes<void>=>apiService.delete(urls.cars.byId(id))
}

export {carService}