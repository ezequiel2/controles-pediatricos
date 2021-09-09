import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import {Typography, Button } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

const AppAppBar = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          {/* <Typography> */}
            <Link 
              to='/' 
              variant="h6" 
              underline="none" 
              color="inherit"
              className={classes.title}>
            {/* component={Link}
            to='/'
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            //href="/premium-themes/onepirate/"
          > */}
            {'El rincon de los MaPadres'}
            </Link>
          {/* </Typography> */}
          <div className={classes.right}>             
            <Typography 
              component={Link}
              to='/sign-in'
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}>              
              Ingresar
            </Typography>
            {/* <Link to='/sign-up'> Pepito </Link> */}
            <Typography
              component={Link}
              to='/sign-up'
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              //href="/premium-themes/onepirate/sign-up/"
            >
              {'Registrarse'}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
