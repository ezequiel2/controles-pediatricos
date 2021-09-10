import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import {Typography, Button } from '@material-ui/core';
import { LinkedCamera } from '@material-ui/icons';

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
            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Typography 
                className={classes.title}
                color="inherit"
                variant="h6" 
                underline='none'
                >
                El rincon de los MaPadres
              </Typography>
            </Link>
          <div className={classes.right}>             
            <Link to='/sign-in' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Typography 
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}>              
                  Ingresar
              </Typography>
            </Link>
            <Link to='/sign-up' style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Typography
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}>
                  Registrarse
              </Typography>
            </Link>
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
