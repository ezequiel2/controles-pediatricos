import React, { Fragment, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import { TextField, InputLabel, MenuItem, Box } from "@material-ui/core";
import Select from 'react-select';
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
} from "../../assets/jss/material-dashboard-react";

import { altaHijo, modificarHijo, bajaHijo } from '../../../../controllers/AppController';

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
      },
      "&.MuiInputBase-root.Mui-readOnly": {
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

  const { user, changeUser } = useUser();

  const grupoSanguineoOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'AB', label: 'AB' },
    { value: '0', label: '0' }
  ]

  const factorSanguineoOptions = [
    { value: '+', label: '+' },
    { value: '-', label: '-' }
  ]

  const [selectedGrupoSangOption, setSelectedGrupoSangOption] = useState(null);
  const [selectedFactorSangOption, setSelectedFactorSangOption] = useState(null);
  const [fecNacModif, setFecNacModif] = useState(null);
  const [alergiasModif, setAlergiasModif] = useState(null);
  const [enfCronModif, setEnfCronModif] = useState(null);
  const [comentariosModif, setComentariosModif] = useState(null);

  const onSubmitAlta = async (data) => {

    let dni_mapadre = user.dni;
    let grupo_sanguineo = selectedGrupoSangOption.value;
    let factor_sanguineo = selectedFactorSangOption.value;
    const res = { ...data, dni_mapadre, grupo_sanguineo, factor_sanguineo }
    setSelectedFactorSangOption(null);
    setSelectedGrupoSangOption(null);
    // alert(JSON.stringify(data));

    let getHijo = await altaHijo(res);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }

  const onSubmitModificacion = async (data) => {

    //aca hay que ponerle el input del dni_mapadre
    let dni_mapadre = user.dni;
    let nombre = datosForm.nombre;
    let grupo_sanguineo = selectedGrupoSangOption.value;
    let factor_sanguineo = selectedFactorSangOption.value;
    let fecha_nacimiento = fecNacModif;
    let alergias = alergiasModif;
    let enfermedades_cronicas = enfCronModif;
    let comentarios = comentariosModif;
    const req = {
      ...data,
      dni_mapadre,
      grupo_sanguineo,
      factor_sanguineo,
      nombre,
      fecha_nacimiento,
      alergias,
      enfermedades_cronicas,
      comentarios
    }
    setSelectedFactorSangOption(null);
    setSelectedGrupoSangOption(null);

    let getHijo = await modificarHijo(req);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }

  const onSubmitBaja = async (data) => {
    // alert(JSON.stringify(data));

    //aca hay que ponerle el input del dni_mapadre
    let dni_mapadre = user.dni;
    const res = { ...data, dni_mapadre }

    let getHijo = await bajaHijo(res);

    if (getHijo.rdo === 0) {
      handleFormControles();
    } else if (getHijo.rdo === 1) {
      alert(getHijo.mensaje)
    }
  }


  useEffect(() => {
    if (tipoForm === 'M')
      setValoresIniciales();
  }, [tipoForm]);

  const setValoresIniciales = () => {
    setSelectedGrupoSangOption(datosForm.grupo_sanguineo);
    setSelectedFactorSangOption(datosForm.factor_sanguineo);
    setFecNacModif(datosForm.fecha_nacimiento);
    setAlergiasModif(datosForm.alergias);
    setEnfCronModif(datosForm.enfermedades_cronicas);
    setComentariosModif(datosForm.comentarios);
  }

  return (
    <Fragment>
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
                          label="Fecha nacimiento"
                          variant="outlined"
                          {...register("fecha_nacimiento")}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Grupo sanguineo
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          options={grupoSanguineoOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedGrupoSangOption}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Factor sanguineo
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          options={factorSanguineoOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedFactorSangOption}
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
                          label="Enfermedades cronicas"
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
                        disabled
                        label="Fecha de Nacimiento"
                        variant="outlined"
                        value={datosForm.fecha_nacimiento}
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
                        disabled
                        label="Grupo Sanguineo"
                        variant="outlined"
                        value={datosForm.grupo_sanguineo}
                        {...register("grupo_sanguineo")}
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
                        {...register("factor_sanguineo")}
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
                        {...register("alergias")}
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
                        {...register("enfermedades_cronicas")}
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
                        {...register("comentarios")}
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
                      Cerrar
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
                  <h4 className={classes.cardTitleWhite}>Modificá la informacion de tu hij@</h4>
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
                          name="nombre"
                          readOnly
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
                          value={fecNacModif}
                          onChange={(e) => setFecNacModif(e.target.value)}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Grupo Sanguineo
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="grupoSangModif"
                          value={selectedGrupoSangOption}
                          options={grupoSanguineoOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedGrupoSangOption}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <InputLabel className={classes.selectLabel}>
                          Factor Sanguineo
                        </InputLabel>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          name="color"
                          defaultValue={selectedFactorSangOption}
                          options={factorSanguineoOptions}
                          styles={{
                            menu: provided => ({ ...provided, zIndex: 9999 })
                          }}
                          onChange={setSelectedFactorSangOption}
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
                          // value={datosForm.alergias}
                          value={alergiasModif}
                          onChange={(e) => setAlergiasModif(e.target.value)}
                        // {...register("alergias")}
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
                          // value={datosForm.enfermedades_cronicas}
                          value={enfCronModif}
                          onChange={(e) => setEnfCronModif(e.target.value)}
                        // {...register("enfermedades_cronicas")}
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
                          // value={datosForm.comentarios}
                          value={comentariosModif}
                          onChange={(e) => setComentariosModif(e.target.value)}
                        // {...register("comentarios")}
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

      {/* Baja */}
      {tipoForm === 'B' &&
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmitBaja)}>
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
                          readOnly
                          value={datosForm.nombre}
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
                          label="Fecha de Nacimiento"
                          name="fecha_nacimiento"
                          variant="outlined"
                          readOnly
                          value={datosForm.fecha_nacimiento}
                          //{...register("fecha_nacimiento")}
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
                          readOnly
                          value={datosForm.grupo_sanguineo}
                          //{...register("grupo_sanguineo")}
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
                          readOnly
                          value={datosForm.factor_sanguineo}
                          //{...register("factor_sanguineo")}
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
                          readOnly
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
                          name="enfermedades_cronicas"
                          readOnly
                          value={datosForm.enfermedades_cronicas}
                          //{...register("enfermedades_cronicas")}
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
                          readOnly
                          value={datosForm.comentarios}
                          //{...register("comentarios")}
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