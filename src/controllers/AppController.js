import urlWebServices from '../controllers/webServices';

import axios, { AxiosInstance } from 'axios';

const TIME_OUT_REQUEST_MILLISECONDS = 150000;

// const api = axios.create({
//     baseURL: 'http://localhost:8000/api/',
//     headers: {
//         "Access-Control-Allow-Origin": '*',
//         // "Access-Control-Allow-Methods": GET,POST,PUT,DELETE,
//     }
// });

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive'
    },
    withCredentials: false,
    timeout: TIME_OUT_REQUEST_MILLISECONDS
});

export const login = async function (login) {

    //url webservices
    let url = urlWebServices.login;

    url = url + 'marialaura@gmail.com';

    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.validEmail);
    formData.append('password', login.password);
    alert(formData);
    alert(url);
    try {
        api.get('usuarios/find/email/marialaura@gmail.com',{timeout:TIME_OUT_REQUEST_MILLISECONDS})
            .then(response => {
                let rdo = response.status;
                alert(response);
                let data = response.data;
                alert(response.data);
                switch (rdo) {
                    case 200:
                        {
                            alert("estoy en 200");
                            //guardo token
                            //localStorage.setItem("x", data.loginUser.token);
                            //guardo usuario logueado
                            //let user = data.loginUser.user;
                            //localStorage.setItem("nombre", user.name);
                            //localStorage.setItem("email", user.email);
                            //alert("estoy en 200");
                            //console.log("aca estoy");
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
                // alert("aca esta el res");
                // alert(JSON.stringify(res));            
                // return res;
            })
            .catch(error => alert(error));


        // let response = await fetch(url, {
        //     method: 'GET', // or 'PUT'
        //     mode: "cors",
        //     // headers:{
        //     //     'Accept':'application/x-www-form-urlencoded',
        //     //    // 'x-access-token': WebToken.webToken,
        //     //     'Origin':'http://localhost:3000',
        //     //     'Content-Type': 'application/x-www-form-urlencoded'},
        //     // body: formData,
        // });

        // fetch(url)
        //     .then(data => {
        //         data.json();
        //         return alert(data);
        //     })
        //     .then(respuesta => {
        //         console.log(respuesta);
        //         alert(respuesta)
        //     })
        //     .catch(err => alert("este es el error"));

        // await fetch('http://localhost:8000/api/usuarios/find/email/marialaura@gmail.com')
        //     .then(res => res.json())
        //     .then(res => alert(res))
        //     .catch(err => alert(err));

        // let response = await fetch('http://localhost:8000/api/usuarios/find/email/marialaura@gmail.com');
        // if (response.ok) { // si el HTTP-status es 200-299
        //     // obtener cuerpo de la respuesta (método debajo)
        //     let json = await response.json();
        //     alert(json);
        // } else {
        //     alert("Error-HTTP: " + response.status);
        // }

        alert("estoy aca fuera switch 1");
        // let rdo = response.status;
        alert("estoy aca fuera switch 2");
        // let data = response.data;
        alert("estoy aca fuera switch 3");
        // switch (rdo) {
        //     case 200:
        //         {
        //             //guardo token
        //             localStorage.setItem("x", data.loginUser.token);
        //             //guardo usuario logueado
        //             let user = data.loginUser.user;
        //             localStorage.setItem("nombre", user.name);
        //             localStorage.setItem("email", user.email);
        //             alert("estoy en 200");
        //             console.log("aca estoy");
        //             return ({ rdo: 0, mensaje: "Ok" });//correcto
        //         }
        //     case 400:
        //         {
        //             //error mail
        //             return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
        //         }
        //     case 203:
        //         {
        //             //error password
        //             return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
        //         }
        //     default:
        //         {
        //             //otro error
        //             return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
        //         }
        // }
    }
    catch (error) {
        alert("esto es error");
        alert(error);
        alert("esto es el status");
        alert(error.status);
        // alert(error.response.status)
        // alert(error.response);
        // alert(error.response.data);
        // alert(error.response.status);
        // alert(error.response.headers);
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