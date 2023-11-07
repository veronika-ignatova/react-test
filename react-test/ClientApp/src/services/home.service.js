import axiosService from "./axios.service";
import {urls} from "../configs/urls";

export const homeService ={
    getHello: () => axiosService.get(urls.home).then(value => value.data)
}