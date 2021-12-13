import React, { Fragment, useEffect, useState } from "react";
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

import { altaHijo, modificarHijo } from '../../../../controllers/AppController';

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
      "&.MuiInputBase-root.Mui-disabled": {
        color: "rgba(0, 0, 0, 0.8)" // (default alpha is 0.38)
      }
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

  const onSubmitAlta = async (data) => {
    alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    let dni_mapadre = '33419623';
    const res = { ...data, dni_mapadre }

    let getHijo = await altaHijo(res);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }

  const onSubmitModificacion = async (data) => {
    alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    let dni_mapadre = '33419623';
    const res = { ...data, dni_mapadre }

    let getHijo = await modificarHijo(res);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }

  const onSubmitBaja = async (data) => {
    alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    let dni_mapadre = '33419623';
    const res = { ...data, dni_mapadre }

    let getHijo = await altaHijo(res);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }

  return (
    <Fragment>
      {alert(tipoForm)}
      {/* Alta */}
      {tipoForm === 'A' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitAlta)}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Nombre"
                          variant="outlined"
                          name="nombre"
                          required
                          {...register("nombre")}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="fecha_nacimiento"
                          label="Fecha Nacimiento"
                          variant="outlined"
                          {...register("fecha_nacimiento")}
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
                          name="grupo_sanguineo"
                          {...register("grupo_sanguineo")} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          variant="outlined"
                          label="Factor Sanguineo"
                          name="factor_sanguineo"
                          {...register("factor_sanguineo")} />
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
                          name="alergias"
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
                          name="enfermedades_cronicas"
                          {...register("enfermedades_cronicas")} />
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
                          name="comentarios"
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
                        Cargar
                      </Button>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        onClick={OnClickCancelar}
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

      {/* Visualizar */}
      {tipoForm === 'V' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        //type='date'
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Nombre"
                        variant="outlined"
                        disabled
                        value={datosForm.nombre}
                      // {...register("fecha", { required: true })}
                      //{...register("nombre")} 
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        type='date'
                        className={classes.root}
                        InputLabelProps={{ shrink: true }}
                        size='small'
                        id="standard-basic"
                        disabled
                        label="Fecha de Nacimiento"
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
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
                        rows='5'
                        fullWidth='true'
                        value={datosForm.comentarios}
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <GridContainer className={classes.cardFooter}>
                    <Button
                      className={classes.formButton}
                      color='primary'
                      // type="submit"
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

      {/* Modificar */}
      {tipoForm === 'M' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitModificacion)}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          //type='date'
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Nombre"
                          variant="outlined"
                          name="nombre"
                          disabled
                          value={datosForm.nombre}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          label="Fecha de Nacimiento"
                          name="fecha_nacimiento"
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
                          name="grupo_sanguineo"
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
                          name="factor_sanguineo"
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
                          name="alergias"
                          value={datosForm.alergias}
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
                          name="enfermedades_cronicas"
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
                          name="comentarios"
                          value={datosForm.comentarios}
                        />
                      </GridItem>
                    </GridContainer>
                    <br />
                    <GridContainer className={classes.cardFooter}>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        type="submit"
                      >
                        Modificar
                      </Button>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        // type="submit"
                        onClick={OnClickCancelar}
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
    </Fragment>

  );

}