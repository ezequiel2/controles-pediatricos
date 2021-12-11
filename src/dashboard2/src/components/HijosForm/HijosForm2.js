import React, { Fragment, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import { TextField, InputLabel, Select, MenuItem } from "@material-ui/core";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardAvatar from "../Card/CardAvatar.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import FormControl from '@mui/material/FormControl';
import avatar from "../../assets/img/faces/marc.jpg";
import {
  primaryColor,
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
  button: {
    marginTop: "16px",
    borderColor: primaryColor[0],
    '&.Mui-focused fieldset': {
      borderColor: primaryColor[0],
    },
  },
  select: {
    marginTop: "16px",
    marginLeft: '15px',
    width: "190px",
    height: "38px",
  },
  selectLabel: {
    //marginBotton: "0px",
    marginLeft: '29px',
  },
  root: {

    marginTop: "16px",
    '& label.Mui-focused': {
      color: grayColor[0],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: primaryColor[0],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: grayColor[4],
      },
      '&:hover fieldset': {
        borderColor: grayColor[4],
      },
      '&.Mui-focused fieldset': {
        borderColor: primaryColor[0],
      },
    },
  },
};

const useStyles = makeStyles(styles);

export default function HijosForm2({ tipoForm, handleFormControles, OnClickCancelar, datosForm }) {

  const classes = useStyles();
  const [hijo, setHijo] = useState(true);
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  const handleChangeSelect = (event) => {
    setHijo(event.target.value);
  };

  const onSubmit = (data) => {
    //setResult(JSON.stringify(data));
    handleFormControles(data);
  }

  return (
    <Fragment>

      {tipoForm === 'A' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <GridContainer>
                      <InputLabel>Hijo</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Hijo"
                        onChange={handleChangeSelect}
                        variant="outlined"
                        {...register("hijo")}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </GridContainer> */}

                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          //type='date'
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Nombre"
                          variant="outlined"
                          // {...register("fecha", { required: true })}
                          {...register("nombre")} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          //label="Fecha de Nacimiento"
                          variant="outlined"
                          {...register("fechaNacimiento")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Grupo Sanguineo"
                          variant="outlined"
                          {...register("grupoSanguineo")} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          variant="outlined"
                          label="Factor Sanguineo"
                          {...register("factorSanguineo")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          variant="outlined"
                          multiline='true'
                          label="Alergias"
                          rows='5'
                          fullWidth='true'
                          {...register("alergias")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          variant="outlined"
                          label="Enfermedades Cronicas"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          {...register("enfermedadesCronicas")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          variant="outlined"
                          label="Comentarios"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          {...register("comentarios")} />
                      </GridItem>
                    </GridContainer>
                    <br />
                    <GridContainer className={classes.cardFooter}>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        type="submit"
                      >
                        {/* onClick={() => handleFormControles(result)} */}
                        Cargar
                      </Button>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        type="submit"
                      >
                        Cancelar
                      </Button>
                    </GridContainer>
                  </form>

                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      }
      {tipoForm === 'V' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                  {/* <GridContainer>
                    <InputLabel>Hijo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Hij@"
                      onChange={handleChangeSelect}
                      variant="outlined"
                      value={datosForm.hijo}
                    // {...register("hijo")}
                    >
                      {/* <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </GridContainer> */}
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        //type='date'
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Nombre"
                        variant="outlined"
                        value={datosForm.nombre}
                        // {...register("fecha", { required: true })}
                        //{...register("nombre")} 
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        type='date'
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        //label="Fecha de Nacimiento"
                        variant="outlined"
                        value={datosForm.fecha_nacimiento}
                        //{...register("fechaNacimiento")}
                         />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Grupo Sanguineo"
                        variant="outlined"
                        value={datosForm.grupo_sanguineo}
                        //{...register("grupoSanguineo")}
                         />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        variant="outlined"
                        label="Factor Sanguineo"
                        value={datosForm.factor_sanguineo}
                        //{...register("factorSanguineo")}
                         />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        variant="outlined"
                        multiline='true'
                        label="Alergias"
                        rows='5'
                        fullWidth='true'
                        value={datosForm.alergias}
                        //{...register("alergias")}
                         />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        variant="outlined"
                        label="Enfermedades Cronicas"
                        multiline='true'
                        rows='5'
                        fullWidth='true'
                        value={datosForm.enfermedades_cronicas}
                         />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        variant="outlined"
                        label="Comentarios"
                        multiline='true'
                        rows='5'
                        fullWidth='true'
                        value={datosForm.comentarios}
                        />                        
                    </GridItem>
                  </GridContainer>
                  <br />
                  <GridContainer className={classes.cardFooter}>
                    {/* <Button
                      className={classes.formButton}
                      color='primary'
                      type="submit"
                    >
                      {/* onClick={() => handleFormControles(result)} }
                      Cargar
                    </Button> */}
                    <Button
                      className={classes.formButton}
                      color='primary'
                      type="submit"
                      onClick={OnClickCancelar}
                    >
                      Cancelar
                    </Button>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      }

      {tipoForm === 'M' &&
        <p>'Soy un Modificacion'</p>
      }
    </Fragment>

  );

}