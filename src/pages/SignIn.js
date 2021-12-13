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
import { login } from '../controllers/AppController';

//importo useContext
import useUser from '../contexts/hooks/useUser';

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
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
  const [validEmail, setValidEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuarioValido, setUsuarioValido] = useState(false);

  const [usuarioLogin, setUsuarioLogin] = useState();

  const { user, changeUser } = useUser();

  const handleEmail = (values) => {
    setValidEmail(values.email);
  }
  const handlePassword = (values) => {
    //alert(values.password);
    setPassword(values.password);
  }

  // useEffect(() => {
  //   alert("estoy en useEffect")
  //   if (usuarioValido)
  //     changeUser(usuarioLogin);
  // });

  // useEffect(() => {
  //   cargarHijos('33419623');
  //   cargarPerfilMapadre('33419623');
  // }, []);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }
    handleEmail(values);
    handlePassword(values);

    return errors;
  };

  const validarLogin = async function () {
    let datos = {
      validEmail: validEmail,
      password: password
    }
    let getLogin = await login(datos);
    if (getLogin.rdo === 0) {
      // setUsuarioValido(true);
      setUsuarioLogin(getLogin.user);
      // changeUser(usuarioLogin);

    } else if (getLogin.rdo === 1) {
      alert(getLogin.mensaje)
    }
  }

  const loginUser = () => {
    // alert(validEmail);
    // alert(password);
    if (validEmail !== "" && password !== "") {
      validarLogin();
    } else {
      alert("Debe completar usuario y password");
    }
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const redirect = () => {
    if (usuarioLogin) {
      alert(JSON.stringify(usuarioLogin))
      changeUser(usuarioLogin);
      return <Redirect to='/admin/miperfil' />
    }
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Ingresar
          </Typography>
          <Typography variant="body2" align="center">
            {'No sos miembro todavia? '}
            <Link to="/sign-up" align="center" underline="always">
              Registrate
            </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
                //onChange={handleEmail}
                model="validEmail"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Contraseña"
                type="password"
                margin="normal"
                //changeAction={handlePassword}
                model="password"
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
          onClick={loginUser}
        >
          Ingresar
        </FormButton>

        <Typography align="center">
          <Link underline="always" to="/forgot-password">
            Olvidaste la contraseña?
          </Link>
        </Typography>
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(SignIn);
