import withRoot from '../withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';

import { getPerfilMapadreEmail, modificarPerfilMapadre, sendEmailMapadre } from '../controllers/AppController';

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

function ForgotPassword() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['email'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    handleEmail(values);

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  const handleEmail = (values) => {
    setValidEmail(values.email);
  }

  const [validEmail, setValidEmail] = React.useState('');

  const randomize = () => {
    const min = 100000;
    const max = 999999;
    return Math.trunc(min + (Math.random() * (max - min)));
  }

  const modificarPerfilMapadreNuevaContraseña = async (dni_mapadre, password) => {

    let password_expirada = 1;

    let datos = { dni_mapadre, password, password_expirada }

    let getModifPerfil = await modificarPerfilMapadre(datos);

    if (getModifPerfil.rdo === 1) {
      alert(getModifPerfil.mensaje)
    }

    return getModifPerfil.rdo;
  }

  const sendEmail = async () => {

    const getMapadreEmail = await getPerfilMapadreEmail(validEmail);

    if (getMapadreEmail.rdo === 0) {
      let new_password = randomize();
      let resModif = await modificarPerfilMapadreNuevaContraseña(getMapadreEmail.perfil.dni, new_password)

      if (resModif === 0) {
        let email = getMapadreEmail.perfil.email;
        let data = { email, new_password };

        let resSendEmail = await sendEmailMapadre(data);

        alert(resSendEmail.mensaje);
      
      }
    } else if (getMapadreEmail.rdo === 1) {
      alert(getMapadreEmail.mensaje)
    }

  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Olvidaste tu contraseña?
          </Typography>
          <Typography variant="body2" align="center">
            {"Ingresa tu correo electronico y te " +
              'enviaremos un link para resetear tu contraseña.'}
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <Field
                autoFocus
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
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
        <FormButton
          className={classes.button}
          size="large"
          color="secondary"
          fullWidth
          onClick={sendEmail}
        >
          'Enviar mail'
        </FormButton>
      </AppForm>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(ForgotPassword);
