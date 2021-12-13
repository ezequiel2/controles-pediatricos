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
    perfilMapadre: urlApi + 'api/usuarios/find/dni/',
    listarHijos: urlApi + "api/hijos/list/dni-mapadre/",
    altaHijo: urlApi + "api/hijos/create",
    modificarHijo: urlApi + "/api/hijos/actualizar/dni-mapadre/:dni_mapadre/nombre-hijo/:nombre",
    //
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg2: urlApi + "api/users/uploadImg",
};