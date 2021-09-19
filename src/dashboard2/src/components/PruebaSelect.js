import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "@material-ui/core/styles";

import {
    primaryColor,
    dangerColor,
    successColor,
    grayColor,
    defaultFont,
  } from "../assets/jss/material-dashboard-react";
  
  const styles = {
    // disabled: {
    //   "&:before": {
    //     backgroundColor: "transparent !important",
    //   },
    // },
    select: {
      // "&:hover:not($disabled):before,&:before": {
      //   borderColor: grayColor[4] + " !important",
      //   borderWidth: "1px !important",
      // },
      // "&:after": {
      //   borderColor: primaryColor[0],
      // },
      borderColor: primaryColor[0],
    },
    // underlineError: {
    //   "&:after": {
    //     borderColor: dangerColor[0],
    //   },
    // },
    // underlineSuccess: {
    //   "&:after": {
    //     borderColor: successColor[0],
    //   },
    // },
    labelRoot: {
      ...defaultFont,
      color: grayColor[3] + " !important",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.42857",
      letterSpacing: "unset",
    },
    labelRootError: {
      color: dangerColor[0],
    },
    labelRootSuccess: {
      color: successColor[0],
    },
    feedback: {
      position: "absolute",
      top: "18px",
      right: "0",
      zIndex: "2",
      display: "block",
      width: "24px",
      height: "24px",
      textAlign: "center",
      pointerEvents: "none",
    },
    marginTop: {
      marginTop: "16px",
    },
    formControl: {
      paddingBottom: "10px",
      margin: "27px 0 0 0",
      position: "relative",
      verticalAlign: "unset",
    },
    // labelRTL: {
    //   right: 0,
    //   transition: "all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    //   "&.MuiInputLabel-shrink": {
    //     transform: "translate(0, 1.5px)",
    //   },
    // },
  };

const useStyles = makeStyles(styles);


export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
