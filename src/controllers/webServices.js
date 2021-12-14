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
    
    //landing-page
    login: urlApi + "api/usuarios/sign-in/",
    signup: urlApi + "api/usuarios/create",

    //Perfil
    perfilMapadre: urlApi + 'api/usuarios/find/dni/',
    modificarPerfilMapadre: urlApi + 'api/usuarios/actualizar/dni/',

    //Hijos
    listarHijos: urlApi + "api/hijos/list/dni-mapadre/",
    altaHijo: urlApi + "api/hijos/create",
    modificarHijo1: urlApi + "api/hijos/actualizar/dni-mapadre/",
    modificarHijo2: "/nombre-hijo/",
    bajaHijo1: urlApi + "api/hijos/eliminar/dni-mapadre/",
    bajaHijo2: "/nombre-hijo/",

    //ControlesPediatricos
    listarControles: urlApi + 'api/controles-pediatricos/list/dni-mapadre/',

    //Vacunas
    listarVacunas: urlApi + 'api/vacunas/list/dni-mapadre/',
    altaVacuna: urlApi + 'api/vacunas/create',
    modificarVacuna: urlApi + 'api/vacunas/actualizar/id-vacuna/',
    bajaVacuna: urlApi + 'api/vacunas/eliminar/id-vacuna/',

    //Imagenes
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg2: urlApi + "api/users/uploadImg",
};