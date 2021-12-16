import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Button from '../CustomButtons/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'

import { uploadFileImg, modificarPerfilMapadre } from '../../../../controllers/AppController';

//importo Context
import useUser from "../../../../contexts/hooks/useUser";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  cameraButton: {
    width: "35px",
    height: "25px",
    padding: "0",
    color: primaryColor[0],
  },

}));

export default function UploadButtons() {
  const classes = useStyles();
  const { user, changeUser } = useUser();


  const handleAvatarImage = async (files) => {
    let responseUploadImage = await uploadFileImg(files[0]);

    if (responseUploadImage.rdo === 0) {
      let imageDB = responseUploadImage.imagenResponse.public_id + "." + responseUploadImage.imagenResponse.format;

      let mapadreNewImage = {
        dni_mapadre: user.dni,
        imagen_perfil: imageDB
      }

      console.log("mapadreNewImage")
      console.log(mapadreNewImage);
      let resModifMapadre = await modificarPerfilMapadre(mapadreNewImage);

      if (resModifMapadre.rdo === 0) {

        let email = user.email;
        let nombre = user.nombre;
        let apellido = user.apellido;
        let telefono = user.telefono;
        let password = user.password;
        let password_expirada = user.password_expirada;

        let newUserImage = {
          ...mapadreNewImage,
          email,
          nombre,
          apellido,
          telefono,
          password,
          password_expirada
        }
        console.log("newUserImage");
        console.log(newUserImage);

        changeUser(newUserImage);

      }else if (resModifMapadre.rdo === 1) {
        alert(resModifMapadre.mensaje)
      }

    } else if (responseUploadImage.rdo === 1) {
      alert(responseUploadImage.mensaje)
    }
  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event) => handleAvatarImage(event.target.files)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Cambiar imagen
        </Button>
      </label>
      {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera className={classes.cameraButton}/>
        </IconButton>
      </label> */}
    </div>
  );
}
