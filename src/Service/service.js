import ApiService from "./api";


export const fetchData = () => ApiService.get(`/products?limit=4`)

export const fetchDataByCategories = () => ApiService.get(`/products/category/jewelery?limit=4`)