import withRoot from '../withRoot';
// --- Post bootstrap -----
import React, { useState, useEffect, useContext } from "react";
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import { Link, Redirect } from 'react-router-dom';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter'
import AppAppBar from '../views/AppAppBar';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';

//importo llamada a log-in
import { modificarPerfilMapadre } from '../controllers/AppController';

//importo useContext
import useUser from '../contexts/hooks/useUser';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(0),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [contraseña, setContraseña] = useState('');
  const [contraseña2, setContraseña2] = useState('');
  // const [usuarioValido, setUsuarioValido] = useState(false);

  const [usuarioLogin, setUsuarioLogin] = useState();
  const { user, changeUser } = useUser();

  const handleContraseña = (values) => {
    setContraseña(values.contraseña);
  }
  const handleContraseña2 = (values) => {
    setContraseña2(values.contraseña2);
  }

  const validate = (values) => {
    const errors = required(['contraseña', 'contraseña2'], values);

    if (values.contraseña === values.contraseña2) {
      handleContraseña(values);
      handleContraseña2(values);
    }else{
      errors.contraseña2 = "Contraseñas no coinciden"
    }

    return errors;
  };

  const actualizarContraseña = async function () {

    let datos = {
      dni_mapadre: user.dni,
      password: contraseña,
      password_expirada: 0,
    }
    
    let getModifPerfil = await modificarPerfilMapadre(datos);

    if (getModifPerfil.rdo === 0) {
      let dni = user.dni;
      let password = contraseña;
      let password_expirada = 0;
      let telefono = user.telefono;
      let nombre = user.nombre;
      let apellido = user.apellido;
      let email = user.email;
      let imagen_perfil = user.imagen_perfil;

      let updateUser = {
        dni,
        password,
        password_expirada,
        telefono,
        nombre,
        apellido,
        email,
        imagen_perfil
      }
      setUsuarioLogin(updateUser);

    } else if (getModifPerfil.rdo === 1) {
      alert(getModifPerfil.mensaje)
    }
  }

  const newPasswordUser = () => {
    if (contraseña && contraseña2) {
      actualizarContraseña();
    } else {
      alert("Debe completar contraseña y nueva contraseña");
    }
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const redirect = () => {
    if (usuarioLogin) {
      changeUser(usuarioLogin);
      return <Redirect to='/admin/miperfil' />
    }
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h4" gutterBottom marked="center" align="center">
            Cambiar Contraseña
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="contraseña"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Nueva Contraseña"
                margin="normal"
                name="contraseña"
                required
                size="medium"
                type="password"
                //onChange={handleEmail}
                model="contraseña"
              />
              <Field
                fullWidth
                size="medium"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="contraseña2"
                autoComplete="contraseña2"
                label="Repita Nueva Contraseña"
                type="password"
                margin="normal"
                //changeAction={handlePassword}
                model="contraseña2"
              />

              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
            </form>
          )}
        </Form>
        <div>{redirect()}</div>
        <FormButton
          className={classes.button}
          // disabled={submitting || sent}
          size="large"
          color="secondary"
          fullWidth
          // component={Link}
          //to='/user-profile'
          // to='/admin'
          onClick={newPasswordUser}
        >
          Guardar
        </FormButton>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
