import { urlWebServices, api } from '../controllers/webServices';

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
                    return ({ rdo: 0, user: response.data }); //correcto
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
            // case 207:
            //     {
            //         //error password
            //         return ({ rdo: 1, mensaje: "Contraseña expirada." });
            //     }
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
        imagen_perfil: signup.imagen_perfil,
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
                    return ({ rdo: 0, user: response.data }); //correcto
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

export const getPerfilMapadre = async function (dni) {

    //url webservices
    let url = urlWebServices.perfilMapadre + dni;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    // alert("estoy en 200");
                    // let result = []
                    // result[1] = JSON.stringify(data);
                    return ({ rdo: 0, perfil: response.data }); //correcto
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

export const getPerfilMapadreEmail = async function (email) {

    //url webservices
    let url = urlWebServices.perfilMapadreEmail + email;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    // alert("estoy en 200");
                    // let result = []
                    // result[1] = JSON.stringify(data);
                    return ({ rdo: 0, perfil: response.data }); //correcto
                }
            case 204:
                {
                    return ({ rdo: 1, mensaje: "Mail ingresado inexistente" });
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Mail inexistente" });
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

export const modificarPerfilMapadre = async function (mapadre) {
    //url webservices
    let url = urlWebServices.modificarPerfilMapadre + mapadre.dni_mapadre

    const formData = {
        nombre: mapadre.nombre,
        apellido: mapadre.apellido,
        telefono: mapadre.telefono,
        password: mapadre.password,
        password_expirada: mapadre.password_expirada,
        imagen_perfil: mapadre.imagen_perfil
    };

    try {
        let response = await api.post(url, formData);

        let rdo = response.status;
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, perfil: response.data }); //correcto
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

    // alert("estoy en altaHijo");
    // alert(JSON.stringify(formData));

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
    let url = urlWebServices.modificarHijo1 + hijo.dni_mapadre + urlWebServices.modificarHijo2 + hijo.nombre;

    const formData = {
        fecha_nacimiento: hijo.fecha_nacimiento,
        grupo_sanguineo: hijo.grupo_sanguineo,
        factor_sanguineo: hijo.factor_sanguineo,
        alergias: hijo.alergias,
        enfermedades_cronicas: hijo.enfermedades_cronicas,
        comentarios: hijo.comentarios
    };

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

export const bajaHijo = async function (hijo) {
    //url webservices
    let url = urlWebServices.bajaHijo1 + hijo.dni_mapadre + urlWebServices.bajaHijo2 + hijo.nombre;

    try {
        let response = await api.delete(url);

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

export const listarControles = async function (dniMapadre) {

    //url webservices
    let url = urlWebServices.listarControles + dniMapadre;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, listaControles: response.data }); //correcto
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

export const altaControl = async function (control) {

    let url = urlWebServices.altaControl;

    const formData = {
        dni_mapadre: control.dni_mapadre,
        nombre_hijo: control.nombre_hijo,
        fecha_control_ped: control.fecha_control_ped,
        profesional: control.profesional,
        peso: control.peso,
        altura: control.altura,
        diametro_cabeza: control.diametro_cabeza,
        medicamentos_recetados: control.medicamentos_recetados,
        estudios_realizados: control.estudios_realizados,
        observaciones: control.observaciones
    };

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

export const modificarControl = async function (control) {

    let url = urlWebServices.modificarControl + control.id_control_ped;

    const formData = {
        fecha_control_ped: control.fecha_control_ped,
        profesional: control.profesional,
        peso: control.peso,
        altura: control.alergias,
        diametro_cabeza: control.diametro_cabeza,
        medicamentos_recetados: control.medicamentos_recetados,
        estudios_realizados: control.estudios_realizados,
        observaciones: control.observaciones
    };

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

export const bajaControl = async function (id_control_ped) {

    let url = urlWebServices.bajaControl + id_control_ped;

    try {
        let response = await api.delete(url);

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

export const listarVacunas = async function (dniMapadre) {

    //url webservices
    let url = urlWebServices.listarVacunas + dniMapadre;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, listaVacunas: response.data }); //correcto
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

export const altaVacuna = async function (vacuna) {

    let url = urlWebServices.altaVacuna;

    const formData = {
        dni_mapadre: vacuna.dni_mapadre,
        nombre_hijo: vacuna.nombre_hijo,
        lugar_aplicacion: vacuna.lugar_aplicacion,
        fecha_aplicacion: vacuna.fecha_aplicacion,
        vacuna: vacuna.vacuna,
        dosis: vacuna.dosis,
    };

    // alert("estoy en altaHijo");
    // alert(JSON.stringify(formData));

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

export const modificarVacuna = async function (vacuna) {

    let url = urlWebServices.modificarVacuna + vacuna.id_vacuna;

    const formData = {
        lugar_aplicacion: vacuna.lugar_aplicacion,
        fecha_aplicacion: vacuna.fecha_aplicacion,
        vacuna: vacuna.vacuna,
        dosis: vacuna.dosis,
    };

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

export const bajaVacuna = async function (id_vacuna) {

    let url = urlWebServices.bajaVacuna + id_vacuna;

    try {
        let response = await api.delete(url);

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

export const listarUltimosControles = async function (dniMapadre) {

    //url webservices
    let url = urlWebServices.listarUltimosControles + dniMapadre;

    try {
        let response = await api.get(url);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, listaUltimosControles: response.data }); //correcto
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

export const uploadFileImg = async function (file) {
    //url webservices
    let url = urlWebServices.uploadFileImg;
    let upload_preset = urlWebServices.upload_preset;

    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", upload_preset)

    try {
        let response = await api.post(url, formData);

        let rdo = response.status;
        // alert("rdo");
        // alert(rdo);
        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, imagenResponse: response.data }); //correcto
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error en la subida de la foto" });
                }
        }
    } catch (err) {
        return ({ rdo: 1, mensaje: "Ha ocurrido un error en la subida de la foto" });
    }
}

export const sendEmailMapadre = async function (data) {
    //url webservices
    let url = urlWebServices.sendEmail + data.email;

    const formData = {
        new_password: data.new_password
    };

    try {
        let response = await api.post(url, formData);

        let rdo = response.data.status;
        console.log(response);

        switch (rdo) {
            case 200:
                {
                    return ({ rdo: 0, mensaje: "Mail enviado exitosamente" }); //correcto
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
