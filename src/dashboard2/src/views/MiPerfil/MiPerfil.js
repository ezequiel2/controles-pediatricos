import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames'
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import UploadButton from '../../components/UploadButton/UploadButton';
import Table from "../../components/Table/Table.js";
import HijosForm2 from '../../components/HijosForm/HijosForm2'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import IconButton from "@material-ui/core/IconButton";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'

import avatar from "../../assets/img/faces/marc.jpg";
import { listarHijos } from '../../../../controllers/AppController';
import axios from 'axios';

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
    display: 'inline-block',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardHeaderButton: {
    float: 'right',
    color: 'primary',
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
};


const urlApi = "http://localhost:8000/";

const api = axios.create({
  baseURL: urlApi,
  headers: {
    "Access-Control-Allow-Origin": '*',
  },
});

const tablaHijos = [

  { nombre: 'Dakota Rice', fecha_nacimiento: '12/06/2019', grupo_sanguineo: 'AB', factor_sanguineo: '+' },
  { nombre: 'Minerva Hooper', fecha_nacimiento: '12/06/2017', grupo_sanguineo: 'AB', factor_sanguineo: '+' },
  { nombre: 'Dakota Rice', fecha_nacimiento: '12/06/2021', grupo_sanguineo: 'AB', factor_sanguineo: '+' },

]

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();

  // const [datosForm, setDatosForm] = useState({
  //   hijo: 'Dakota Rice',
  //   fechaNacimiento: '12/06/2019',
  //   grupoSanguineo: 'AB',
  //   factorSanguineo: '+',
  //   alergias: 'Naranja',
  //   enfermedadesCronicas: 'Diabetes',
  //   observaciones: ''
  // })
  const [datosForm, setDatosForm] = useState();

  const [showMostrarForm, setMostrarForm] = useState(false);
  const [tipoForm, setTipoForm] = useState('');

  const [hijos, setHijos] = useState([]);
  const [hijosStatus, setHijosStatus] = useState(false);

  // const [showAgregarHijo, setShowAgregarHijo] = useState(false);
  // const OnClickAgregarHijo = () => {
  //   setShowAgregarHijo(!showAgregarHijo);
  // }
  // const OnClickCargarHijo = (e) => {
  //   setShowAgregarHijo(!showAgregarHijo);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  // const OnClickCancelarCargarHijo = (e) => {
  //   setShowAgregarHijo(!showAgregarHijo);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  const handleFormControles = (data) => {
    const { hijo, fechaNacimiento, grupoSanguineo, factorSanguineo, alergias, enfermedadesCronicas, comentarios } = data;
    setDatosForm(data);
    //console.log(data)
    console.log('Hola' + datosForm.grupoSanguineo)
    MostrarForm();
  }

  const MostrarForm = () => {
    setMostrarForm(!showMostrarForm);
    setTipoForm('A')
    //formulario.current.scrollIntoView();
    //this.PedControlForm.current.focus();
  }

  const VisualizarForm = (hijo) => {
    setDatosForm(hijo);
    alert('estoy en visualizar');
    alert(hijo.nombre);
    MostrarForm();
    setTipoForm('V');
  }

  const EditarForm = () => {
    setTipoForm('M')
  }

  useEffect(() => {
    alert('en el useEffect')
    cargarHijos('33419623');
  }, []);


  const cargarHijos = async (dni) => {

    alert("estoy en cargarHijos");
    // alert(dni);
    // let getListarHijos = [];
    // getListarHijos = await listarHijos(dni);
    let getListarHijos = await api.get('api/hijos/list/dni-mapadre/33419623');

    alert(JSON.stringify(getListarHijos));
    setHijos(getListarHijos.data);
    // alert("getLogin");
    // alert(getLogin);
    // if (getListarHijos.rdo === 0) {

    //   alert("devolvi 0");
    //   setHijosStatus(true);
    //   alert(hijosStatus);
    //   alert(JSON.stringify(getListarHijos.listaHijos));
    //   alert(JSON.stringify(hijos));
    //   // setHijos(getListarHijos.listaHijos);

    //   // alert(hijos);

    // } else if (getListarHijos.rdo === 1) {
    //   alert(getListarHijos.mensaje)
    // }
  }



  return (
    <div>
      <React.Fragment>
        {/* {cargarHijos('35330117')} */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edita tu Perfil</h4>
                {/* <p className={classes.cardCategoryWhite}>Completa tu perfil</p> */}
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="DNI"
                      //id="company-disabled"
                      id='dni'
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: true,
                      }}
                    />
                  </GridItem>
                  {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        disabled: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Nombre"
                      id="nombre"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Apellido"
                      id="apellido"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Telefono"
                      id="telefono"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Actualizar Perfil</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                {/* <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6> */}
                <h4 className={classes.cardTitle}>Ezequiel Grillo</h4>
                {/* <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button> */}
                <UploadButton round />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Mis Hij@s</h4>
                {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarHijo}>Nuevo Hijo</Button> */}
                <IconButton
                  className={classes.cardHeaderButton}
                  onClick={MostrarForm}>
                  <AddReactionIcon
                    className={classes.cardTitleWhite}
                  //color='primary'
                  //size='large'
                  />
                </IconButton>
              </CardHeader>
              <CardBody>
                {
                  hijos &&
                  (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["Nombre", "Fecha de Nacimiento", "Grupo Sanguineo", "Factor", "", "", ""]}
                      tableData={
                        hijos.map((hijo) => (
                          [hijo.nombre,
                          hijo.fecha_nacimiento,
                          hijo.grupo_sanguineo,
                          hijo.factor_sanguineo,
                          <IconButton className={classes.tableActionButton} onClick={() => VisualizarForm(hijo)}>
                            <RemoveRedEye className={classes.tableActionButtonIcon + " " + classes.edit} />
                          </IconButton>,
                          <IconButton className={classes.tableActionButton} onClick={EditarForm}>
                            <EditIcon className={classes.tableActionButtonIcon + " " + classes.edit} />
                          </IconButton>,
                          <IconButton className={classes.tableActionButton}>
                            <CloseIcon className={classes.tableActionButtonIcon + " " + classes.close} />
                          </IconButton>
                          ]))
                      }
                    />
                  )
                }
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        {showMostrarForm ? (
          <div>
            <br />
            <HijosForm2
              tipoForm={tipoForm}
              handleFormControles={handleFormControles}
              OnClickCancelar={MostrarForm}
              // OnClickCancelarCargarControl={OnClickCancelarCargarControl}
              datosForm={datosForm} />
          </div>
        ) : null}
      </React.Fragment>
    </div>
  );
}
