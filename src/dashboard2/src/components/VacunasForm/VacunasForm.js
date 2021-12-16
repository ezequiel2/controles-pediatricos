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
  const [vacuna, setVacuna] = useState(null);
  const [dosis, setDosis] = useState(null);


  // const OnClickOcultar = () => {
  //   setMostrar(!mostrar);
  // }
  //const { OnClickCargarVacuna, OnClickCancelarCargarVacuna } = props;

  useEffect(() => {
    alert("useEffect");
    alert(user.dni);
    cargarHijos(user.dni);
    if (tipoForm === 'M')
      setValoresIniciales();
  }, [tipoForm]);

  const onSubmitAlta = async (data) => {
    //alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    //let dni_mapadre = '33419623';
    let dni_mapadre = user.dni;
    let nombre_hijo = hijoSelected.value;
    let res = { ...data, dni_mapadre, nombre_hijo }
    alert(JSON.stringify(res));
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
    setVacuna(datosForm.vacuna);
    setDosis(datosForm.dosis);
  }

  const cargarHijos = async (dni) => {

    let getListarHijos = await listarHijos(dni);

    if (getListarHijos.rdo === 0) {
      alert("listar hijos OK")
      let cargaHijosOption =
        getListarHijos.listaHijos.map((hijo) => ({
          value: hijo.nombre,
          label: hijo.nombre
        }))

      setHijosOption(cargaHijosOption);
      alert(JSON.stringify(hijosOption));

    } else if (getListarHijos.rdo === 1) {
      alert(getListarHijos.mensaje)
    }
  }

  const onSubmitModificacion = async () => {

    let id_control_ped = datosForm.id_vacuna;
    let fecha_aplicacion = fechaAplicacion;
    let lugar_aplicacion = lugarAplicacion;
    let nombreVacuna = vacuna;
    let tipoDosis = dosis;

    let req = {
      id_control_ped,
      fecha_aplicacion,
      lugar_aplicacion,
      nombreVacuna,
      tipoDosis
    }
    setSelectedHijo(null);

    let getVacuna = await modificarVacuna(req);

    if (getVacuna.rdo === 0) {
      handleFormControles();
    } else if (getVacuna.rdo === 1) {
      alert(getVacuna.mensaje)
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
                  {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitAlta)}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Hijos
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
                        {/* <CustomInput
                          labelText="Fecha"
                          id='fecha'
                          formControlProps={{
                            fullWidth: true,
                          }}
                        /> */}
                        {/* <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Fecha aplicacion"
                          variant="outlined"
                        /> */}
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
                        <CustomInput
                          labelText="COMBO VACUNA"
                          id="vacuna"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          {...register("vacuna")}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="dosis"
                          label="Dosis"
                          variant="outlined"
                          {...register("dosis")}
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
                  {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
                </CardHeader>
                <CardBody>
                  {/* <form onSubmit={handleSubmit(onSubmitAlta)}> */}
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
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      {/* <CustomInput
                            labelText="Fecha"
                            id='fecha'
                            formControlProps={{
                              fullWidth: true,
                            }}
                            disabled
                          /> */}
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Fecha aplicacion"
                        variant="outlined"
                        value={datosForm.fecha_aplicacion}
                        disabled
                        readOnly
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      {/* <CustomInput
                          labelText="Lugar de Aplicacion"
                          id='lugar'
                          formControlProps={{
                            fullWidth: true,
                          }}
                          disabled
                        /> */}
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Lugar aplicacion"
                        variant="outlined"
                        value={datosForm.lugar_aplicacion}
                        disabled
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="COMBO VACUNA"
                        id="peso"
                        formControlProps={{
                          fullWidth: true,
                        }}
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
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                  <br />
                  <GridContainer className={classes.cardFooter}>
                    <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cerrar</Button>
                  </GridContainer>
                  {/* </form> */}
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
                  {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
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
                          disabled
                          readOnly
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        {/* <CustomInput
                            labelText="Fecha"
                            id='fecha'
                            formControlProps={{
                              fullWidth: true,
                            }}
                            disabled
                          /> */}
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
                        {/* <CustomInput
                          labelText="Lugar de Aplicacion"
                          id='lugar'
                          formControlProps={{
                            fullWidth: true,
                          }}
                          disabled
                        /> */}
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
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Vacuna"
                          variant="outlined"
                          value={vacuna}
                          onChange={(e) => setVacuna(e.target.value)}
                          readOnly
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Dosis"
                          variant="outlined"
                          value={dosis}
                          onChange={(e) => setDosis(e.target.value)}
                          readOnly
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
                        Actualizar
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

      {/* Baja */}
      {tipoForm === 'B' &&
        <div>
        </div>
      }





    </React.Fragment>
  );

}