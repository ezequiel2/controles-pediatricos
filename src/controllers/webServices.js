import axios from 'axios';

const urlApi = "http://localhost:8000/";

const TIME_OUT_REQUEST_MILLISECONDS = 50000;

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
    login:urlApi + "api/usuarios/sign-in/",
    signup: urlApi + "api/usuarios/create",
    listarHijos: urlApi + "api/hijos/list/dni-mapadre/",
    //
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
};