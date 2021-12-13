import { urlWebServices, api } from '../controllers/webServices';

function replaceJSX(str, find, replace) {
    let parts = str.split(find);
    let result;
    for(let i = 0, result = []; i < parts.length; i++) {
        result.push(parts[i]);
        result.push(replace);
    }
    return result;
}


export const login = async function (login) {

    //url webservices
    let url = urlWebServices.login;

    //armo json con datos
    const formData = {
        email: login.validEmail,
        password: login.password,
    };

    try {
        let response = await api.post(url, formData);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    // alert("estoy en 200");
                    // let result = []
                    // result[1] = JSON.stringify(data);
                    return ({ rdo: 0, mensaje: "Ok" }); //correcto
                }
            case 204:
                {
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            case 207:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "Contraseña expirada." });
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
    } catch (error) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
        // alert("esto es error");
        // alert(error);
        // alert("esto es el status");
        // alert(error.status);
    };
}

export const signup = async function (signup) {

    //url webservices
    let url = urlWebServices.signup;

    //armo json con datos
    const formData = {
        email: signup.validEmail,
        password: signup.password,
        dni: signup.dni,
        nombre: signup.nombre,
        apellido: signup.apellido,
        telefono: signup.telefono,
    };

    // alert(JSON.stringify(formData));

    try {
        let response = await api.put(url, formData);

        // alert(JSON.stringify(response));

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, mensaje: "Ok" }); //correcto
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }

    } catch (error) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
    };
}

export const listarHijos = async function (dniMapadre) {

    //url webservices
    let url = urlWebServices.listarHijos + dniMapadre;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, listaHijos: response.data }); //correcto
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    } catch (error) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
        // alert("esto es error");
        // alert(error);
        // alert("esto es el status");
        // alert(error.status);
    };

}

export const altaHijo = async function (hijo) {

    //url webservices
    let url = urlWebServices.altaHijo;

    const formData = {
        dni_mapadre: hijo.dni_mapadre,
        nombre: hijo.nombre,
        fecha_nacimiento: hijo.fecha_nacimiento,
        grupo_sanguineo: hijo.grupo_sanguineo,
        factor_sanguineo: hijo.factor_sanguineo,
        alergias: hijo.alergias,
        enfermedades_cronicas: hijo.enfermedades_cronicas,
        comentarios: hijo.comentarios
    };

    alert("estoy en altaHijo");
    alert(JSON.stringify(formData));

    try {
        let response = await api.put(url, formData);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, mensaje: "Ok" }); //correcto
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    } catch (error) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
    };
}

export const modificarHijo = async function (hijo) {

    //url webservices
    let url = urlWebServices.modificarHijo;

    url = replaceJSX(url,":dni_mapadre", hijo.dni_mapadre)
    url = replaceJSX(url, ":nombre", hijo.nombre)

    alert(url);

    const formData = {
        fecha_nacimiento: hijo.fecha_nacimiento,
        grupo_sanguineo: hijo.grupo_sanguineo,
        factor_sanguineo: hijo.factor_sanguineo,
        alergias: hijo.alergias,
        enfermedades_cronicas: hijo.enfermedades_cronicas,
        comentarios: hijo.comentarios
    };

    alert("estoy en modifHijo");
    alert(JSON.stringify(formData));

    try {
        let response = await api.post(url, formData);

        let rdo = response.status;
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, mensaje: "Ok" }); //correcto
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    } catch (error) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
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