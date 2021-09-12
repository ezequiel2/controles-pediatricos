import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div>
              <div className={classes.item}>
              <img
                className={classes.image}
                align="justify"
                src="/images/pediatrician.svg"
                alt="pediatra"
              />
              </div>
              <Typography variant="h6" className={classes.title}>
                Controles Pediatricos
              </Typography>
              <Typography variant="h5" align="justify">
                {'Te acompañamos en el cuidado de la salud de tu hij@ brindandote un '}
                {'espacio para registrar los controles medicos y poder llevar la historia clinica '}
                {'con vos todo el tiempo'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/images/calendar.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
              Calendario de Vacunacion
              </Typography>
              <Typography variant="h5" align="justify">
                {'Con nosotros te será mas fácil recordar aquellas fechas importantes para tus '}
                {'hijos. También podrás registrar las aplicaciones facil y rápidamente'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/images/growth.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Control de crecimiento
              </Typography>
              <Typography variant="h5" align="justify">
                {'El control de crecimiento es una de las tareas mas importantes que llevan '}
                {'adelante los pediatras. Lo sabemos y por eso te acompañamos para que puedas '}
                {'registrar y conocer toda la informacion necesaria.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
