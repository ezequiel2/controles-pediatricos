import withRoot from '../withRoot';
import { Redirect } from "react-router-dom";
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
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
  const [sent, setSent] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usuarioValido, setUsuarioValido] = React.useState(false);

  const handleEmail = (values) => {
    setValidEmail(values.email);
  }
  const handlePassword = (values) => {
    //alert(values.password);
    setPassword(values.password);
  }


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

    alert(datos.validEmail);
    alert(datos.password);

    let getLogin = await login(datos);

    if (getLogin.rdo === 0) {
      alert("devolvi 0");
      setUsuarioValido(true);
    }
    if (getLogin.rdo === 1) {
      alert(getLogin.mensaje)
    }
  }

  const loginUser = async () => {

    // alert(validEmail);
    // alert(password);
    if (validEmail !== "" && password !== "") {
      await validarLogin();
    } else {
      alert("Debe completar usuario y password");
    }
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const redirect = () => {
    if (usuarioValido) {
      return <Redirect to='/admin' />
    }
  }

  return (
    <div>
      {redirect()}
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
                Registrarse
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
                <FormButton
                  className={classes.button}
                  disabled={submitting || sent}
                  size="large"
                  color="secondary"
                  fullWidth
                  // component={Link}
                  //to='/user-profile'
                  // to='/admin'
                  onClick={loginUser}
                >
                  {submitting || sent ? 'Ingresando…' : 'Ingresar'}
                </FormButton>
              </form>
            )}
          </Form>
          <Typography align="center">
            <Link underline="always" to="/forgot-password">
              Olvidaste la contraseña?
            </Link>
          </Typography>
        </AppForm>
        {/* <AppFooter /> */}
      </React.Fragment>
    </div>
  );
}

export default withRoot(SignIn);
