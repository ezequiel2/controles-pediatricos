import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/customSelectStyle.js";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles(styles);

export default function CustomSelect(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    //inputProps,
    //error,
    //success,
    //rtlActive,
  } = props;

  // const labelClasses = classNames({
  //   [" " + classes.labelRootError]: error,
  //   [" " + classes.labelRootSuccess]: success && !error,
  //   [" " + classes.labelRTL]: rtlActive,
  // });
   const underlineClasses = classNames({
  //   [classes.underlineError]: error,
  //   [classes.underlineSuccess]: success && !error,
       [classes.select]: true,
   });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });
  // let newInputProps = {
  //   maxLength:
  //     inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
  //   minLength:
  //     inputProps && inputProps.minLength ? inputProps.minLength : undefined,
  //   step: inputProps && inputProps.step ? inputProps.step : undefined,
  // };

  const [hijo, setHijo] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setHijo(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot}// + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Select
        classes={{
          root: marginTop,
          //disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
        value={hijo}
        // {...inputProps}
        // inputProps={newInputProps}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null} */}
    </FormControl>
  );
}

CustomSelect.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  //inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  // error: PropTypes.bool,
  // success: PropTypes.bool,
  // rtlActive: PropTypes.bool,
};
