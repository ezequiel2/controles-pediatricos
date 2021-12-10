import axios, { AxiosInstance } from 'axios';

const urlApi = "http://localhost:8000/";
//const urlApi = "https://api-viernes.herokuapp.com/";
console.log("url",urlApi);

const TIME_OUT_REQUEST_MILLISECONDS = 150000;

export const api = axios.create({
    baseURL: urlApi,
    headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    },
    withCredentials: false,
    timeout: TIME_OUT_REQUEST_MILLISECONDS
});

export const urlWebServices = {
    login:urlApi +"api/usuarios/sign-in/",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
};