import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import {Link} from 'react-router-dom';

const backgroundImage =
  'https://cdn.pixabay.com/photo/2019/06/08/12/30/baby-feet-4260035_960_720.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Nos preocupamos por la salud de tus hijos
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {/* Nos preocupamos por la salud de tus hijos */}
      </Typography>
      <Link to='/sign-up' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="/sign-up/"
          >
            Registrate
          </Button>
        </Link> 
      <Typography variant="body2" color="inherit" className={classes.more}>
        Una vida mas simple y cerca de tus hijos
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
