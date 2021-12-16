import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Table from "../../components/Table/Table.js";
import { CardMedia } from "@material-ui/core";
import calendario from '../../assets/img/CalendarVac2020.jpg'
import VacunasForm from "../../components/VacunasForm/VacunasForm.js";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'

import { listarVacunas } from '../../../../controllers/AppController';
import useUser from "../../../../contexts/hooks/useUser.js";

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

const useStyles = makeStyles(styles);

export default function Vacunas() {
  const classes = useStyles();
  const [image, setImage] = React.useState(calendario);
  const [showAgregarVacuna, setShowAgregarVacuna] = useState(false);
  const [showMostrarForm, setMostrarForm] = useState(false);
  const [tipoForm, setTipoForm] = useState('');
  const [datosForm, setDatosForm] = useState();

  const [vacunas, setVacunas] = useState([]);

  const { user, changeUser } = useUser();

  useEffect(() => {
    cargarVacunas(user.dni);
  }, []);

  const cargarVacunas = async (dni) => {

    let getListarVacunas = await listarVacunas(dni);
    // let getListarHijos = await api.get('api/hijos/list/dni-mapadre/33419623');

    // alert(JSON.stringify(getListarVacunas));
    // setHijos(getListarHijos.data);
    // alert("getLogin");
    // alert(getLogin);
    if (getListarVacunas.rdo === 0) {
      setVacunas(getListarVacunas.listaVacunas);

    } else if (getListarVacunas.rdo === 1) {
      alert(getListarVacunas.mensaje)
    }
  }

  // const OnClickCancelarCargarVacuna = (e) => {
  //   setShowAgregarVacuna(!showAgregarVacuna);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  const MostrarForm = () => {
    setMostrarForm(!showMostrarForm);
    // setTipoForm('A')
    //formulario.current.scrollIntoView();
    //this.PedControlForm.current.focus();
  }

  const AltaForm = () => {
    setTipoForm('A')
    MostrarForm();
  }

  const VisualizarForm = (vacuna) => {
    setDatosForm(vacuna);
    setTipoForm('V');
    MostrarForm();
  }

  const EditarForm = (vacuna) => {
    setDatosForm(vacuna);
    setTipoForm('M')
    MostrarForm();
  }

  const BajaForm = (vacuna) => {
    setDatosForm(vacuna);
    setTipoForm('B');
    MostrarForm();
  }

  const handleFormControles = (data) => {
    //const { hijo, fecha, profesional, peso, altura, diametro, medicamentos, estudios, observaciones } = data;
    //MostrarForm();
    //setDatosForm(data);
    //setDatosForm(data);
    //setProf(data.profesional)
    //console.log(data)
    // alert('Hola' + datosForm.profesional)
    // alert('Hola2' + prof)
    cargarVacunas(user.dni);
    MostrarForm();

  }

  return (
    <div>
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Calendario de Vacunacion</h4>
                {/* <p className={classes.cardCategoryWhite}>Completa tu perfil</p> */}
              </CardHeader>
              <CardBody>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={image}
                />
              </CardBody>
            </Card>
            <br />
            <Card>
              <CardHeader color="primary" display='inline-block'>
                <h4 className={classes.cardTitleWhite}>Vacunas aplicadas</h4>
                <IconButton
                  className={classes.cardHeaderButton}
                  onClick={AltaForm}>
                  <AddToPhotosIcon
                    className={classes.cardTitleWhite}
                  //color='primary'
                  //size='large'
                  />
                </IconButton>
                {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarControl}>Boton feo</Button> */}
              </CardHeader>
              {
                vacunas &&
                (
                  <CardBody>
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["Nombre", "Fecha", "Vacuna", "Lugar", "Dosis", "", ""]}
                      tableData={
                        vacunas.map((vacuna) => (
                          [vacuna.nombre_hijo,
                          vacuna.fecha_aplicacion,
                          vacuna.vacuna,
                          vacuna.lugar_aplicacion,
                          vacuna.dosis,
                          <IconButton className={classes.tableActionButton} onClick={() => VisualizarForm(vacuna)}>
                            <RemoveRedEye className={classes.tableActionButtonIcon + " " + classes.edit} />
                          </IconButton>,
                          <IconButton className={classes.tableActionButton} onClick={() => EditarForm(vacuna)}>
                            <EditIcon className={classes.tableActionButtonIcon + " " + classes.edit} />
                          </IconButton>,
                          <IconButton className={classes.tableActionButton} onClick={() => BajaForm(vacuna)}>
                            <CloseIcon className={classes.tableActionButtonIcon + " " + classes.close} />
                          </IconButton>
                          ]))
                      }

                    // [
                    //   ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                    //   ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                    //   ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                    // ]}
                    />
                  </CardBody>
                )
              }
              <CardFooter>
                {/* <Button color="primary">Actualizar Perfil</Button> */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        {showMostrarForm ? (
          <div>
            <br />
            <VacunasForm
              tipoForm={tipoForm}
              handleFormControles={handleFormControles}
              OnClickCancelar={MostrarForm}
              datosForm={datosForm} />
          </div>
        ) : null}
      </React.Fragment>
    </div>
  );
}
