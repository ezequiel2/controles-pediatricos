import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
//import Link from '@material-ui/core/Link';
import { Link, Redirect } from 'react-router-dom';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';

//importo llamada a sign-up
import { signup } from '../controllers/AppController';

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

function SignUp() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [dni, setDni] = React.useState('');
  const [validEmail, setValidEmail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [signUpValido, setSignUpValido] = React.useState(false);

  const handleVariables = (values) => {
    setValidEmail(values.email);
    setPassword(values.password);
    setNombre(values.firstName);
    setApellido(values.lastName);
    setDni(values.dni);
    setTelefono(values.telefono);
  }

  // const handleEmail = (values) => {
  //   setValidEmail(values.email);
  // }
  // const handlePassword = (values) => {
  //   setPassword(values.password);
  // }
  // const handleNombre = (values) => {
  //   setNombre(values.nombre);
  // }
  // const handleApellido = (values) => {
  //   setApellido(values.apellido);
  // }
  // const handleDni = (values) => {
  //   setDni(values.dni);
  // }
  // const handleTelefono = (values) => {
  //   setTelefono(values.telefono);
  // }

  const validate = (values) => {
    const errors = required(
      ['firstName', 'lastName', 'dni', 'email', 'telefono', 'password'],
      values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    handleVariables(values);
    // handleEmail(values);
    // handlePassword(values);
    // handleNombre(values);
    // handleApellido(values);
    // handleDni(values);
    // handleTelefono(values);

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const validarSignup = async function () {

    let datos = {
      validEmail: validEmail,
      password: password,
      dni: dni,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
    }

    // alert(JSON.stringify(datos));
    let getSignup = await signup(datos);

    if (getSignup.rdo === 0) {
      setSignUpValido(true);
    } else if (getSignup.rdo === 1) {
      alert(getSignup.mensaje)
    }
  }



  const signupUser = () => {
    if (validEmail !== "" && password !== "") {
      validarSignup();
    } else {
      alert("Debe completar usuario y password");
    }
  };

  const redirect = () => {
    if (signUpValido) {
      return <Redirect to='/admin/miperfil' />
    }
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Registrate
          </Typography>
          <Typography variant="body2" align="center">
            <Link to='/sign-in' underline="always">
              Ya tenes una cuenta?
            </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    autoComplete="fname"
                    fullWidth
                    label="Nombre"
                    name="firstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    autoComplete="lname"
                    fullWidth
                    label="Apellido"
                    name="lastName"
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="dni"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="DNI"
                margin="normal"
                name="dni"
                required
              />
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                autoComplete="telefono"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Telefono"
                margin="normal"
                name="telefono"
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Contraseña"
                type="password"
                margin="normal"
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
          color="secondary"
          fullWidth
          onClick={signupUser}
        >
          Registrate
        </FormButton>
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(SignUp);
