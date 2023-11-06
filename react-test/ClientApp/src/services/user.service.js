import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    create: (user) => axiosService.post(`${urls.users}/create`, user).then(value => value.data)
}