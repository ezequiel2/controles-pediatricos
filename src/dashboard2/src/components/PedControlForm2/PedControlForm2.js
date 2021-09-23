import React, { useState } from "react";
import { useForm } from "react-hook-form";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardAvatar from "../Card/CardAvatar.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import UploadButton from '../UploadButton/UploadButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import avatar from "../../assets/img/faces/marc.jpg";
import CustomSelect from '../CustomSelect/CustomSelect';
import PruebaSelect from '../PruebaSelect';
import { Input, TextField } from "@material-ui/core";
import {
  primaryColor,
  dangerColor,
  successColor,
  grayColor,
  defaultFont,
} from "../../assets/jss/material-dashboard-react";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardFooter: {
    display: 'inline-block',
  },
  formButton: {
    float: 'left',
    color: 'primary',
    marginRight: '10px',
  },
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: grayColor[4] + " !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: primaryColor[0],
    },
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor[0],
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor[0],
    },
  },
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
  labelRTL: {
    right: 0,
    transition: "all 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    "&.MuiInputLabel-shrink": {
      transform: "translate(0, 1.5px)",
    },
  },
};

const useStyles = makeStyles(styles);

export default function ControlPedForm(props) {

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  const classes = useStyles();
  const [mostrar, setMostrar] = useState(true);
  const OnClickOcultar = () => {
    setMostrar(!mostrar);
  }

  const { OnClickCargarControl, OnClickCancelarCargarControl, datos } = props;
  const datos2 = props.datos;

  return (
    // <React.Fragment>
    // {mostrar ? (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
              {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>

                    {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}> */}
                    {/* <InputLabel id="demo-simple-select-standard-label">Hij@</InputLabel> */}
                    {/* <CustomSelect
                      labelText="Hijo"
                      id='Hijo'
                      formControlProps={{
                       fullWidth: true,
                     }}
                      
                    /> */}
                    <PruebaSelect />
                    {/* </FormControl> */}


                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem GridItem xs={12} sm={12} md={3}>
                    <Input
                      label="Fecha"
                      id='fecha'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      {...register("fecha")}
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: classes.underline,
                      }}
                    />
                  </GridItem>
                  <GridItem GridItem xs={12} sm={12} md={4}>
                    <Input
                      labelText="Profesional"
                      id='profesional'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      {...register("profesional")}
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: classes.underline,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <InputLabel
                      className={classes.formControl + classes.labelRoot + classes.labelClasses}
                      //htmlFor={id}
                      //{...labelProps}
                    >
                      {"Peso(Kg)"}
                    </InputLabel>
                    <Input
                      labelText="Peso(Kg)"
                      id="peso"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: classes.underline,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      //labelText="Altura(cm)"
                      //id="altura"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      variant="standard"
                      id="standard-password-input"
                      label="Password"
                      //type="password"
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: classes.underline,
                      }}
                      {...register("password")}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <TextField
                      label="Diametro cabeza"
                      id="diametroCabeza"
                      variant="standard"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      classes={{
                        root: classes.marginTop,
                        disabled: classes.disabled,
                        underline: classes.underline,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={9}>
                    <Input
                      labelText="Medicamentos recetados"
                      id="medicamentosRecetados"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <Input
                      labelText="Estudios"
                      id="estudios"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <CustomInput
                      labelText="Observaciones"
                      id="observaciones"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                {/* <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Telefono"
                    id="telefono"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* </GridContainer> */}
                {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer> */}
                <GridItem xs={12} sm={12} md={9}>
                  <Input {...register("firstName")} placeholder="First name" />
                </GridItem>
                <CustomInput
                  {...register("observaciones")}
                  labelText="Observaciones"
                  id="observaciones"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                  }}
                />

              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <br />
                <Button className={classes.formButton} color='primary' type="submit">Cargar</Button>
                {/* <Button className={classes.formButton} color= 'primary' onClick={OnClickCargarControl}>Cargar</Button> */}
                <Button className={classes.formButton} color='primary' onClick={OnClickCancelarCargarControl}>Cancelar</Button>
                <p>{result}</p>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6> }
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              {/* <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button> }
              <UploadButton color="primary" round/>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
      {/* ) : null}
    </React.Fragment> */}
    </div>
  );

}