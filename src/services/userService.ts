import {IUser} from "../interfaces/userInterface";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    // getAll:():Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users.base)
    getAll:():IRes<IUser[]> => axiosService.get(urls.users.base),
    getById:(id:number):IRes<IUser> => axiosService.get(urls.users.byId(id))
}
//the function is expected to return a Promise that resolves to an AxiosResponse containing an array of objects that match the IUser interface.
export {userService}