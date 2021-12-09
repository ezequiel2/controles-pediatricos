import urlWebServices from '../controllers/webServices';

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Access-Control-Allow-Origin": '*',
        // "Access-Control-Allow-Methods": GET,POST,PUT,DELETE,
    }
});

export const login = async function (login) {



    //url webservices
    let url = urlWebServices.login;

    url = url + login.validEmail;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.validEmail);
    formData.append('password', login.password);
    alert(formData);
    alert(url);
    try {
        let res = await api.get('usuarios/find/email/marialaura@gmail.com');



        // let response = await fetch(url,{
        //     method: 'GET', // or 'PUT'
        //     //mode: "cors",
        //     headers:{
        //         'Accept':'application/x-www-form-urlencoded',
        //        // 'x-access-token': WebToken.webToken,
        //         'Origin':'http://localhost:3000',
        //         'Content-Type': 'application/x-www-form-urlencoded'},
        //     //body: formData,

        // });

        let rdo = res.status;
        //alert(res.status);
        let data = await res.data;
        //alert(res.data);
        switch (rdo) {
            case 200:
                {
                    //guardo token
                    localStorage.setItem("x", data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);

                    return ({ rdo: 0, mensaje: "Ok" });//correcto
                }
            case 400:
                {
                    //error mail
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        alert(error);
        alert(error.response);
        alert(error.response.data);
        alert(error.response.status);
        alert(error.response.headers);
    };
}

export const guardarImgUser = async function (message) {
    //url webservices
    let url = urlWebServices.guardarImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen', message.imagen);

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 201) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

export const uploadFileImg = async function (files, nombres) {
    //url webservices
    let url = urlWebServices.uploadFileImg;

    console.log('files', files)
    console.log('nombres', nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], nombres[i])
    }

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body: formData
        });

        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByUser = async function () {
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 200) {
            let data = await response.json();
            console.log("imagenesUser", data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else {
            let vacio = [];
            console.log("No hay imagenes")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}