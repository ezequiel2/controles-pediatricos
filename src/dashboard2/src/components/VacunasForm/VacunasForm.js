import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import { useForm } from "react-hook-form";
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
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import Select from 'react-select';
import { TextField, InputLabel, MenuItem, Box, FormControl } from "@material-ui/core";
import avatar from "../../assets/img/faces/marc.jpg";
import { listarHijos, altaVacuna, modificarVacuna, bajaVacuna } from '../../../../controllers/AppController';
import useUser from "../../../../contexts/hooks/useUser";
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

export default function VacunasForm({ tipoForm, handleFormControles, OnClickCancelar, datosForm }) {
  const classes = useStyles();
  const { user, changeUser } = useUser();
  const { register, handleSubmit } = useForm();
  const [mostrar, setMostrar] = useState(true);

  const [hijosOption, setHijosOption] = useState([]);
  const [hijoSelected, setSelectedHijo] = useState(null);
  const [fechaAplicacion, setFechaAplicacion] = useState(null);
  const [lugarAplicacion, setLugarAplicacion] = useState(null);

  const [selectedVacunasOption, setSelectedVacunasOption] = useState(null);
  const [selectedDosisOption, setSelectedDosisOption] = useState(null);

  const vacunasOptions = [
    { value: 'BCG', label: 'BCG' },
    { value: 'Hepatitis A', label: 'Hepatitis A' },
    { value: 'Hepatitis B', label: 'Hepatitis B' },
    { value: 'Pentavalente', label: 'Pentavalente' },
    { value: 'Rotavirus', label: 'Rotavirus' },
    { value: 'Cuadruple', label: 'Cuadruple' },
    { value: 'Poliomelitis', label: 'Poliomelitis' },
    { value: 'Neumococo', label: 'Neumococo' },
    { value: 'Gripe', label: 'Gripe' },
    { value: 'Meningococo', label: 'Meningococo' },
    { value: 'Triple Viral', label: 'Triple Viral' },
    { value: 'Varicela', label: 'Varicela' },
    { value: 'Triple Bacteriana Celular', label: 'Triple Bacteriana Celular' },
    { value: 'Triple Bacteriana Acelular', label: 'Triple Bacteriana Acelular' },
    { value: 'HPV', label: 'HPV' },
    { value: 'Doble Bacteriana', label: 'Doble Bacteriana' },
    { value: 'Doble Viral', label: 'Doble Viral' }
  ]

  const dosisOptions = [
    { value: 'Unica Dosis', label: 'Unica Dosis' },
    { value: '1° Dosis', label: '1° Dosis' },
    { value: '2° Dosis', label: '2° Dosis' },
    { value: '3° Dosis', label: '3° Dosis' }
  ]

  useEffect(() => {
    cargarHijos(user.dni);
    if (tipoForm === 'M')
      setValoresIniciales();
  }, [tipoForm]);

  const onSubmitAlta = async (data) => {

    let dni_mapadre = user.dni;
    let nombre_hijo = hijoSelected.value;
    let vacuna = selectedVacunasOption.value;
    let dosis = selectedDosisOption.value;
    let res = { ...data, dni_mapadre, nombre_hijo, vacuna, dosis }
    console.log("esto es res");
    console.log(res);
    setSelectedHijo(null);

    let getVacuna = await altaVacuna(res);

    if (getVacuna.rdo === 0) {
      handleFormControles();
    } else if (getVacuna.rdo === 1) {
      alert(getVacuna.mensaje)
    }
  }

  const setValoresIniciales = () => {
    setFechaAplicacion(datosForm.fecha_aplicacion);
    setLugarAplicacion(datosForm.lugar_aplicacion);
    setSelectedVacunasOption(datosForm.vacuna);
    setSelectedDosisOption(datosForm.dosis);
  }

  const cargarHijos = async (dni) => {

    let getListarHijos = await listarHijos(dni);

    if (getListarHijos.rdo === 0) {
      let cargaHijosOption =
        getListarHijos.listaHijos.map((hijo) => ({
          value: hijo.nombre,
          label: hijo.nombre
        }))

      setHijosOption(cargaHijosOption);
      // alert(JSON.stringify(hijosOption));

    } else if (getListarHijos.rdo === 1) {
      alert(getListarHijos.mensaje)
    }
  }

  const onSubmitModificacion = async () => {

    let id_vacuna = datosForm.id;
    let fecha_aplicacion = fechaAplicacion;
    let lugar_aplicacion = lugarAplicacion;
    let vacuna = selectedVacunasOption.value;
    let dosis = selectedDosisOption.value;

    let req = { id_vacuna, fecha_aplicacion, lugar_aplicacion, vacuna, dosis }
    setSelectedDosisOption(null);
    setSelectedVacunasOption(null);

    let getVacuna = await modificarVacuna(req);

    if (getVacuna.rdo === 0) {
      handleFormControles();
    } else if (getVacuna.rdo === 1) {
      alert(getVacuna.mensaje)
    }
  }

  const onSubmitBaja = async () => {

    let id_vacuna = datosForm.id;

    let getControl = await bajaVacuna(id_vacuna);

    if (getControl.rdo === 0) {
      handleFormControles();
    } else if (getControl.rdo === 1) {
      alert(getControl.mensaje)
    }
  }


  return (
    <React.Fragment>
      {/* Alta */}
      {tipoForm === 'A' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa los datos de la aplicacion</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitAlta)}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Hijo
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          options={hijosOption}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedHijo}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="fecha_aplicacion"
                          label="Fecha aplicacion"
                          variant="outlined"
                          {...register("fecha_aplicacion")}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        {/* <CustomInput
                          labelText="Lugar de Aplicacion"
                          id='lugar'
                          formControlProps={{
                            fullWidth: true,
                          }}
                        /> */}
                        <TextField
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="lugar_aplicacion"
                          label="Lugar aplicacion"
                          variant="outlined"
                          {...register("lugar_aplicacion")}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Vacuna
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          options={vacunasOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedVacunasOption}
                        />
                        {/* <CustomInput
                          labelText="COMBO VACUNA"
                          id="vacuna"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          {...register("vacuna")}
                        /> */}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Dosis
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          options={dosisOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedDosisOption}
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
                        Alta
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
                  <h4 className={classes.cardTitleWhite}>Completa los datos de la aplicacion</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Nombre"
                        variant="outlined"
                        value={datosForm.nombre_hijo}
                        disabled
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Fecha aplicacion"
                        variant="outlined"
                        value={datosForm.fecha_aplicacion}
                        disabled
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Lugar aplicacion"
                        variant="outlined"
                        value={datosForm.lugar_aplicacion}
                        disabled
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Vacuna"
                        variant="outlined"
                        value={datosForm.vacuna}
                        disabled
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Dosis"
                        variant="outlined"
                        value={datosForm.dosis}
                        disabled
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <GridContainer className={classes.cardFooter}>
                    <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cerrar</Button>
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
                  <h4 className={classes.cardTitleWhite}>Completa los datos de la aplicacion</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitModificacion)}>
                    <GridContainer>
                      <GridItem>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Nombre"
                          variant="outlined"
                          value={datosForm.nombre_hijo}
                          readOnly
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Fecha aplicacion"
                          variant="outlined"
                          value={fechaAplicacion}
                          onChange={(e) => setFechaAplicacion(e.target.value)}
                          readOnly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Lugar aplicacion"
                          variant="outlined"
                          value={lugarAplicacion}
                          onChange={(e) => setLugarAplicacion(e.target.value)}
                          readOnly
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Vacuna
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="dosisModif"
                          value={selectedVacunasOption}
                          options={vacunasOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedVacunasOption}
                        />
                        {/* <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Vacuna"
                          variant="outlined"
                          value={vacuna}
                          onChange={(e) => setVacuna(e.target.value)}
                          readOnly
                        /> */}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Dosis
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="dosisModif"
                          value={selectedDosisOption}
                          options={dosisOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedDosisOption}
                        />
                        {/* <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Dosis"
                          variant="outlined"
                          value={dosis}
                          onChange={(e) => setDosis(e.target.value)}
                          readOnly
                        /> */}
                      </GridItem>
                    </GridContainer>
                    <br />
                    <GridContainer className={classes.cardFooter}>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        type="submit"
                      >
                        Actualizar
                      </Button>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        onClick={OnClickCancelar}
                      >
                        Cerrar
                      </Button>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      }

      {/* Baja */}
      {tipoForm === 'B' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitBaja)}>
                    <GridContainer>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Nombre"
                        variant="outlined"
                        readOnly
                        value={datosForm.nombre_hijo}
                      />
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="fecha_aplicacion"
                          label="Fecha aplicacion"
                          variant="outlined"
                          readOnly
                          value={datosForm.fecha_aplicacion}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Lugar Aplicacion"
                          variant="outlined"
                          readOnly
                          value={datosForm.lugar_aplicacion}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Vacuna"
                          variant="outlined"
                          readOnly
                          value={datosForm.vacuna}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Altura"
                          variant="outlined"
                          readOnly
                          value={datosForm.dosis}
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
                        Eliminar
                      </Button>
                      <Button
                        className={classes.formButton}
                        color='primary'
                        onClick={OnClickCancelar}
                      >
                        Cerrar
                      </Button>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      }





    </React.Fragment>
  );

}