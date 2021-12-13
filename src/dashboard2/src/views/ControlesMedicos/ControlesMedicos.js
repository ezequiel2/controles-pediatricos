import React, { useState, useRef, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import reactDom from "react-dom";
import Button from '../../components/CustomButtons/Button';
import EditIconButton from "../../components/EditIconButton/EditIconButton.js";
import DeleteIconButton from "../../components/DeleteIconButton/DeleteIconButton.js";
import ControlPedForm3 from "../../components/PedControlForm2/PedControlForm3.js";
import VisualIconButton from "../../components/VisualIconButton/VisualIconButton.js";
import IconButton from "@material-ui/core/IconButton";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'

import { listarControles } from '../../../../controllers/AppController';




const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    display: 'inline-block',
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
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


const tablaControlesMed = [
  { nombre: 'Dakota Rice', fecha: '12/06/2021', profesional: 'Abdul Jabbar' },
  { nombre: 'Minerva Hooper', fecha: '12/07/2021', profesional: 'Cosme Fulanito' },
  { nombre: 'Dakota Rice', fecha: '12/08/2021', profesional: 'Woodrow Wilson' },

]

//const datos = { nombre: 'Juan', fecha: '17/05/2021' };

const useStyles = makeStyles(styles);

export default function ControlesMedicos() {
  const classes = useStyles();
  const [prof, setProf] = useState();
  const [showMostrarForm, setMostrarForm] = useState(false);
  const [tipoForm, setTipoForm] = useState('');
  const [showEditarControl, setShowEditarControl] = useState(false);
  const [datosForm, setDatosForm] = useState({
    hijo: '', //fecha, profesional, peso, altura, diametro, medicamentos, estudios, observaciones
    fecha: '',
    profesional: 'Dra Bombi',
    peso: '',
    altura: '',
    diametro: '',
    medicamentos: '',
    estudios: '',
    observaciones: ''
  })

  // const [datosForm, setDatosForm] = useState();

  const MostrarForm = () => {
    setMostrarForm(!showMostrarForm);
    //setTipoForm('A')
    //formulario.current.scrollIntoView();
    //this.PedControlForm.current.focus();
  }

  const AltaForm = () => {
    setTipoForm('A')
    MostrarForm();
  }

  const VisualizarForm = (controlMed) => {
    setDatosForm(controlMed);
    setTipoForm('V');
    MostrarForm();
  }

  const EditarForm = (controlMed) => {
    setDatosForm(controlMed);
    setTipoForm('M');
    MostrarForm();
  }
  // const OnClickEditarControl = () => {
  //   //setShowEditarControl(!showEditarControl);
  //   setShowAgregarControl(!showAgregarControl);
  // }

  // const OnClickCargarControl = (e) => {
  //   setShowAgregarControl(!showAgregarControl);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  // const OnClickCancelar = () => {
  //   setMostrarForm(!showMostrarForm);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  const handleFormControles = (data) => {
    //const { hijo, fecha, profesional, peso, altura, diametro, medicamentos, estudios, observaciones } = data;
    //MostrarForm();
    //setDatosForm(data);
    //setDatosForm(data);
    //setProf(data.profesional)
    //console.log(data)
    // alert('Hola' + datosForm.profesional)
    // alert('Hola2' + prof)
    cargarControles('35330117');
    MostrarForm();

  }



  const [controlesMed, setControlesMed] = useState([]);

  useEffect(() => {
    //alert('en el useEffect')
    cargarControles('35330117');
  }, []);

  const cargarControles = async (dni) => {

    let getListarControles = await listarControles(dni);
    // let getListarHijos = await api.get('api/hijos/list/dni-mapadre/33419623');

    // alert(JSON.stringify(getListarControles));
    // setHijos(getListarHijos.data);
    // alert("getLogin");
    // alert(getLogin);
    if (getListarControles.rdo === 0) {
      setControlesMed(getListarControles.listaControles);

    } else if (getListarControles.rdo === 1) {
      alert(getListarControles.mensaje)
    }
  }

  return (
    <React.Fragment>
      {/* <Button>Desplegar</Button> */}
      {/* <ControlPed /> */}
      <GridContainer autoFocus>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* //aca esta la mugre para arreglar */}
            <CardHeader color="primary" display='inline-block'>
              <h4 className={classes.cardTitleWhite}>Historial de Controles Pediatricos</h4>
              {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarControl}>Boton feo</Button> */}
              <IconButton
                className={classes.cardHeaderButton}
                onClick={MostrarForm}>
                <AddToPhotosIcon
                  className={classes.cardTitleWhite}
                //color='primary'
                //size='large'
                />
              </IconButton>
            </CardHeader>
            {/* <Button onClick={OnClickAgregarControl}> Agregar control </Button>   */}
            {/* {showAgregarControl ? (
              <div><br /><PedControlForm
                OnClickCargarCancelarControl={OnClickCargarCancelarControl} /> </div>
            ) : null} */}
            <CardBody>
              {
                controlesMed &&
                (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={["Nombre", "Fecha", "Profesional", "", "", ""]}
                    tableData={
                      controlesMed.map((controlMed) => (
                        [controlMed.nombre_hijo,
                        controlMed.fecha_control_ped,
                        controlMed.profesional,
                        <IconButton className={classes.tableActionButton} onClick={() => VisualizarForm(controlMed)}>
                          <RemoveRedEye className={classes.tableActionButtonIcon + " " + classes.edit} />
                        </IconButton>,
                        <IconButton className={classes.tableActionButton} onClick={() => EditarForm(controlMed)}>
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
          {/* <p>{tipoForm}</p> */}
          <ControlPedForm3
            tipoForm={tipoForm}
            handleFormControles={handleFormControles}
            OnClickCancelar={MostrarForm}
            // OnClickCancelarCargarControl={OnClickCancelarCargarControl}
            datosForm={datosForm} />
        </div>
      ) : null}
    </React.Fragment>
  );
}
