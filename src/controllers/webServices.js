import axios from 'axios';

const urlApi = "http://localhost:8000/";

const TIME_OUT_REQUEST_MILLISECONDS = 50000;

export const api = axios.create({
    baseURL: urlApi,
    headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        // 'Pragma': 'no-cache',
        // 'Expires': '0',
        // 'Access-Control-Allow-Headers': 'Pragma',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
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
    perfilMapadreEmail: urlApi + 'api/usuarios/find/email/',
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
    altaControl: urlApi + 'api/controles-pediatricos/create',
    modificarControl: urlApi + 'api/controles-pediatricos/actualizar/id-controlPed/',
    bajaControl: urlApi + 'api/controles-pediatricos/eliminar/id-controlPed/',

    //Vacunas
    listarVacunas: urlApi + 'api/vacunas/list/dni-mapadre/',
    altaVacuna: urlApi + 'api/vacunas/create',
    modificarVacuna: urlApi + 'api/vacunas/actualizar/id-vacuna/',
    bajaVacuna: urlApi + 'api/vacunas/eliminar/id-vacuna/',

    //Percentiles
    listarUltimosControles: urlApi + 'api/controles-pediatricos/list/ultimos/dni-mapadre/',

    //Imagenes
    uploadFileImg: "https://api.cloudinary.com/v1_1/controles-pediatricos-api/image/upload",
    upload_preset: "rwvhvefy",
    
    //Mail
    sendEmail: urlApi + 'api/usuarios/send-email/dni/',
};