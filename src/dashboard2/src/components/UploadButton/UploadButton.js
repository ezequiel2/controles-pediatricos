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


  const handleAvatarImage = (event) => {
    console.log("se disparo el onchange");
    console.log(JSON.stringify(event.target.value));
  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleAvatarImage}
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
