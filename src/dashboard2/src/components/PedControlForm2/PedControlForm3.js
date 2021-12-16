import React, { useState, Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardHeader.js";
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import CustomInput from "../CustomInput/CustomInput.js";
import { TextField, InputLabel, MenuItem, Box, FormControl } from "@material-ui/core";
import Select from 'react-select';
import Button from "../CustomButtons/Button.js";
import {
  primaryColor,
  grayColor,
  defaultFont,
} from "../../assets/jss/material-dashboard-react";

import { listarHijos, altaControl, modificarControl, bajaControl } from "../../../../controllers/AppController.js";

//importo Context
import useUser from "../../../../contexts/hooks/useUser";

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
    marginTop: "16px",
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
}

const useStyles = makeStyles(styles);


export default function ControlPedForm3({ tipoForm, handleFormControles, OnClickCancelar, datosForm }) {

  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { user, changeUser } = useUser();
  const [result, setResult] = useState("");
  const [data, setData] = useState();
  const [hijosOption, setHijosOption] = useState([]);
  const [hijoSelected, setSelectedHijo] = useState(null);
  const [prof, setProf] = useState(null);
  const [fecControl, setFecControl] = useState(null);
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [diametro, setDiametro] = useState(null);
  const [estudios, setEstudios] = useState(null);
  const [medicamentos, setMedicamentos] = useState(null);
  const [observaciones, setObservaciones] = useState(null);

  // const onSubmit = (data, e) => {
  //   //setResult(JSON.stringify(data));
  //   handleFormControles(data);
  //   e.target.reset();
  // }

  // const handleInputChange = (event) => {
  //   // console.log(event.target.name)
  //   // console.log(event.target.value)
  //   setData({
  //     ...data,
  //     [event.target.name]: event.target.value
  //   })
  // }

  useEffect(() => {
    cargarHijos(user.dni);
    if (tipoForm === 'M')
      setValoresIniciales();
  }, [tipoForm]);

  const setValoresIniciales = () => {
    setProf(datosForm.profesional);
    setFecControl(datosForm.fecha_control_ped);
    setPeso(datosForm.peso);
    setAltura(datosForm.altura);
    setDiametro(datosForm.diametro_cabeza);
    setEstudios(datosForm.estudios_realizados);
    setMedicamentos(datosForm.medicamentos_recetados);
    setObservaciones(datosForm.observaciones);
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

    } else if (getListarHijos.rdo === 1) {
      alert(getListarHijos.mensaje)
    }
  }

  const onSubmitAlta = async (data) => {

    let dni_mapadre = user.dni;
    let nombre_hijo = hijoSelected.value;

    let res = { ...data, dni_mapadre, nombre_hijo }
    setSelectedHijo(null);

    let getControl = await altaControl(res);

    if (getControl.rdo === 0) {
      handleFormControles();
    } else if (getControl.rdo === 1) {
      alert(getControl.mensaje)
    }
  }

  const onSubmitModificacion = async () => {

    let id_control_ped = datosForm.id_control_ped;
    let fecha_control_ped = fecControl;
    let profesional = prof;
    let diametro_cabeza = diametro;
    let medicamentos_recetados = medicamentos;
    let estudios_realizados = estudios;

    let req = {
      id_control_ped,
      fecha_control_ped,
      profesional,
      peso,
      altura,
      diametro_cabeza,
      medicamentos_recetados,
      estudios_realizados,
      observaciones
    }
    setSelectedHijo(null);

    let getControl = await modificarControl(req);

    if (getControl.rdo === 0) {
      handleFormControles();
    } else if (getControl.rdo === 1) {
      alert(getControl.mensaje)
    }
  }

  const onSubmitBaja = async () => {
    //alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    // let dni_mapadre = user.dni;
    // const res = { ...data, dni_mapadre }

    let res = datosForm.id_control_ped;

    let getControl = await bajaControl(res);

    if (getControl.rdo === 0) {
      handleFormControles();
    } else if (getControl.rdo === 1) {
      alert(getControl.mensaje)
    }
  }

  return (
    <Fragment>

      {tipoForm === 'A' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitAlta)}>
                    <GridContainer>
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
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          type='date'
                          className={classes.root}
                          InputLabelProps={{ shrink: true }}
                          size='small'
                          id="standard-basic"
                          name="fecha_control_ped"
                          label="Fecha control pediatrico"
                          variant="outlined"
                          {...register("fecha_control_ped")}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Profesional"
                          variant="outlined"
                          {...register("profesional")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Peso"
                          variant="outlined"
                          {...register("peso")} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Altura"
                          variant="outlined"
                          {...register("altura")} />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Diametro cabeza"
                          variant="outlined"
                          {...register("diametro_cabeza")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Medicamentos recetados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          {...register("medicamentos_recetados")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Estudios realizados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          {...register("estudios_realizados")} />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Observaciones"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          {...register("observaciones")} />
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

      {tipoForm === 'V' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Consulta de tu control pediatrico</h4>
                </CardHeader>
                <CardBody>
                  {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
                        value={datosForm.nombre_hijo}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Fecha del Control"
                        variant="outlined"
                        value={datosForm.fecha_control_ped}
                        disabled
                        readOnly
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Profesional"
                        variant="outlined"
                        value={datosForm.profesional}
                        disabled
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        id="standard-basic"
                        variant='outlined'
                        size='small'
                        label="Peso"
                        value={datosForm.peso}
                        readOnly
                        disabled
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Altura"
                        variant="outlined"
                        // {...register("altura")}
                        value={datosForm.altura}
                        readOnly
                        disabled
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Diametro cabeza"
                        variant="outlined"
                        //{...register("diametro")} 
                        value={datosForm.diametro_cabeza}
                        disabled
                        readOnly
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Medicamentos recetados"
                        variant="outlined"
                        multiline='true'
                        rows='5'
                        fullWidth='true'
                        // {...register("medicamentos")}
                        value={datosForm.medicamentos_recetados}
                        readOnly
                        disabled
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Estudios realizados"
                        variant="outlined"
                        multiline='true'
                        rows='5'
                        fullWidth='true'
                        // {...register("estudios")}
                        value={datosForm.estudios_realizados}
                        readOnly
                        disabled
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                      <TextField
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Observaciones"
                        variant="outlined"
                        multiline='true'
                        rows='5'
                        fullWidth='true'
                        readOnly
                        disabled
                        // {...register("observaciones")}
                        value={datosForm.observaciones} />

                    </GridItem>
                  </GridContainer>
                  <br />
                  <GridContainer className={classes.cardFooter}>
                    {/* <Button
                                            className={classes.formButton}
                                            color='primary'
                                            type="submit"
                                        // onClick={() => handleFormControles(result)}
                                        >Cargar</Button> */}
                    <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cerrar</Button>
                  </GridContainer>
                  {/* </form> */}
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      }

      {tipoForm === 'M' &&
        <div>
          {/* {() => { setData(datosForm) }} */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Modificá tu control pediatrico</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitModificacion)}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Nombre"
                          variant="outlined"
                          readOnly
                          value={datosForm.nombre_hijo}
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
                          label="Fecha del Control"
                          name="fecha_control"
                          variant="outlined"
                          value={fecControl}
                          onChange={(e) => setFecControl(e.target.value)}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Profesional"
                          variant="outlined"
                          value={prof}
                          onChange={(e) => setProf(e.target.value)}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          id="standard-basic"
                          variant='outlined'
                          size='small'
                          label="Peso"
                          value={peso}
                          onChange={(e) => setPeso(e.target.value)}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Altura"
                          variant="outlined"
                          value={altura}
                          onChange={(e) => setAltura(e.target.value)}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Diametro cabeza"
                          variant="outlined"
                          value={diametro}
                          onChange={(e) => setDiametro(e.target.value)}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Medicamentos recetados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          value={medicamentos}
                          onChange={(e) => setMedicamentos(e.target.value)}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Estudios realizados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          value={estudios}
                          onChange={(e) => setEstudios(e.target.value)}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Observaciones"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          value={observaciones}
                          onChange={(e) => setObservaciones(e.target.value)}
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
                        //type='date'
                        className={classes.root}
                        size='small'
                        id="standard-basic"
                        label="Nombre"
                        variant="outlined"
                        readOnly
                        value={datosForm.nombre_hijo}
                        //{...register("nombre_hijo")}
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
                          name="fecha_control_ped"
                          label="Fecha control pediatrico"
                          variant="outlined"
                          readOnly
                          value={datosForm.fecha_control_ped}
                          //{...register("fecha_control_ped")}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Profesional"
                          variant="outlined"
                          readOnly
                          value={datosForm.profesional}
                        //{...register("profesional")} 
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Peso"
                          variant="outlined"
                          readOnly
                          value={datosForm.peso}
                        //{...register("peso")} 
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
                          value={datosForm.altura}
                        //{...register("altura")} 
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Diametro cabeza"
                          variant="outlined"
                          readOnly
                          value={datosForm.diametro_cabeza}
                        //{...register("diametro_cabeza")} 
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Medicamentos recetados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          readOnly
                          value={datosForm.medicamentos_recetados}
                        //{...register("medicamentos_recetados")}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Estudios realizados"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          readOnly
                          value={datosForm.estudios_realizados}
                        //{...register("estudios_realizados")}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={9}>
                        <TextField
                          className={classes.root}
                          size='small'
                          id="standard-basic"
                          label="Observaciones"
                          variant="outlined"
                          multiline='true'
                          rows='5'
                          fullWidth='true'
                          readOnly
                          value={datosForm.observaciones}
                        //{...register("observaciones")} 
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